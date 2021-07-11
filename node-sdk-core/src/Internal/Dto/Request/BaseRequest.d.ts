import { IRequest } from "./Interfaces/IRequest";
import { ProxyOptions } from "./ProxyOptions";
export declare abstract class BaseRequest<T> implements IRequest<T> {
    static readonly STATUS_CODE_TOO_MANY_REQUEST = 429;
    apiVersion: string;
    enableTelemetry: boolean;
    proxyOptions?: ProxyOptions;
    timeoutInMilliseconds?: number;
    constructor();
    protected abstract createRequest(): {
        method: string;
        url: string;
        headers: {};
        body?: any;
    };
    /**
     * Executes this request.
     *
     * @return the response body JSON decoded as T
     * @throws ReloadlyException if the request execution fails.
     */
    execute(): Promise<T>;
    proxy(options?: ProxyOptions): this;
    timeout(milliseconds?: number): this;
    private createResponseException;
    private createRateLimitException;
}
