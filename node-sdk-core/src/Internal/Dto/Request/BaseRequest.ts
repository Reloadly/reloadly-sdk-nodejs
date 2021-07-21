import { ApiError } from "../../../Dto/ApiError";
import { ApiException } from "../../../Exception/ApiException";
import { RateLimitException } from "../../../Exception/RateLimitException";
import { ReloadlyException } from "../../../Exception/ReloadlyException";
import { ExceptionUtil } from "../../Util/ExceptionUtil";
import { TelemetryUtil } from "../../Util/TelemetryUtil";
import { IRequest } from "./Interfaces/IRequest";
import { ProxyOptions } from "./ProxyOptions";
const axios = require('axios').default;

export abstract class BaseRequest<T> implements IRequest<T> {

    static readonly STATUS_CODE_TOO_MANY_REQUEST = 429;

    public apiVersion: string;
    public enableTelemetry: boolean;
    public proxyOptions?: ProxyOptions;
    public timeoutInMilliseconds?: number;

    constructor() {
    }

    protected abstract createRequest(): { method: string, url: string, headers: {}, body?};

    /**
     * Executes this request.
     *
     * @return the response body JSON decoded as T
     * @throws ReloadlyException if the request execution fails.
     */
    async execute(): Promise<T> {
        var request = this.createRequest();

        let headers = request.headers;

        if (this.enableTelemetry) {
            var telemetry = TelemetryUtil.create(this.apiVersion);
            headers = headers ?? {};
            headers["Reloadly-Client"] = TelemetryUtil.httpHeaderValue(telemetry);
        }

        var req = {
            method: request.method,
            url: request.url,
            data: request.body,
            headers: headers
        };

        if (this.proxyOptions) {
            req["proxy"] = this.proxyOptions.axiosOptions();
        }

        if (this.timeoutInMilliseconds) {
            req["timeout"] = this.timeoutInMilliseconds;
        }

        try {
            var response = await axios(req);
            return response.data;
        } catch (err) {
            throw this.createResponseException(err.response);
        }
    }

    proxy(options?: ProxyOptions): this {
        this.proxyOptions = options;
        return this;
    }

    timeout(milliseconds?: number): this {
        this.timeoutInMilliseconds = milliseconds;
        return this;
    }

    private createResponseException(response: { body, status, path, headers: {} }): ReloadlyException {
        if (response?.status == BaseRequest.STATUS_CODE_TOO_MANY_REQUEST) {
            return this.createRateLimitException(response);
        }

        if (!response?.body) {
            return new ApiException(
                "No response from server, please try again or contact support",
                response?.path, response?.status);
        }

        return ExceptionUtil.convert(<ApiError>response.body, response.status);
    }

    private createRateLimitException(response: { body, status, path, headers: {} }): RateLimitException {

        const rateLimitException: RateLimitException = <RateLimitException>this.createResponseException(response);

        // -1 as default value if the header could not be found.
        let resetValue: string = response.headers["X-RateLimit-Reset"] ?? "-1";
        let limitValue: string = response.headers["X-RateLimit-Limit"] ?? "-1";
        let remainingValue: string = response.headers["X-RateLimit-Remaining"] ?? "-1";

        rateLimitException.limit = BigInt(limitValue);
        rateLimitException.remaining = BigInt(remainingValue);
        rateLimitException.expectedResetTimestamp = BigInt(resetValue);

        return rateLimitException;
    }
}
