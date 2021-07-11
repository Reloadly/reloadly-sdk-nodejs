import { ProxyOptions } from "../Dto/Request/ProxyOptions";
export declare abstract class BaseOperation {
    baseUrl: string;
    enableTelemetry: boolean;
    proxyOptions?: ProxyOptions;
    timeoutInMilliseconds?: number;
    constructor(baseUrl: string, enableTelemetry?: boolean);
    proxy(proxyOptions?: ProxyOptions): this;
    timeout(milliseconds?: number): this;
}
