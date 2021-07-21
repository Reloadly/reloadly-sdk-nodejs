"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRequest = void 0;
const ApiException_1 = require("../../../Exception/ApiException");
const ExceptionUtil_1 = require("../../Util/ExceptionUtil");
const TelemetryUtil_1 = require("../../Util/TelemetryUtil");
const axios = require('axios').default;
class BaseRequest {
    constructor() {
    }
    /**
     * Executes this request.
     *
     * @return the response body JSON decoded as T
     * @throws ReloadlyException if the request execution fails.
     */
    async execute() {
        var request = this.createRequest();
        let headers = request.headers;
        if (this.enableTelemetry) {
            var telemetry = TelemetryUtil_1.TelemetryUtil.create(this.apiVersion);
            headers = headers ?? {};
            headers["Reloadly-Client"] = TelemetryUtil_1.TelemetryUtil.httpHeaderValue(telemetry);
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
        }
        catch (err) {
            throw this.createResponseException(err.response);
        }
    }
    proxy(options) {
        this.proxyOptions = options;
        return this;
    }
    timeout(milliseconds) {
        this.timeoutInMilliseconds = milliseconds;
        return this;
    }
    createResponseException(response) {
        if (response?.status == BaseRequest.STATUS_CODE_TOO_MANY_REQUEST) {
            return this.createRateLimitException(response);
        }
        if (!response?.body) {
            return new ApiException_1.ApiException("No response from server, please try again or contact support", response?.path, response?.status);
        }
        return ExceptionUtil_1.ExceptionUtil.convert(response.body, response.status);
    }
    createRateLimitException(response) {
        const rateLimitException = this.createResponseException(response);
        // -1 as default value if the header could not be found.
        let resetValue = response.headers["X-RateLimit-Reset"] ?? "-1";
        let limitValue = response.headers["X-RateLimit-Limit"] ?? "-1";
        let remainingValue = response.headers["X-RateLimit-Remaining"] ?? "-1";
        rateLimitException.limit = BigInt(limitValue);
        rateLimitException.remaining = BigInt(remainingValue);
        rateLimitException.expectedResetTimestamp = BigInt(resetValue);
        return rateLimitException;
    }
}
exports.BaseRequest = BaseRequest;
BaseRequest.STATUS_CODE_TOO_MANY_REQUEST = 429;
//# sourceMappingURL=BaseRequest.js.map