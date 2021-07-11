import { ProxyOptions } from "../Dto/Request/ProxyOptions";

export abstract class BaseOperation {
    baseUrl: string;
    enableTelemetry: boolean;
    proxyOptions?: ProxyOptions;
    timeoutInMilliseconds?: number;

    constructor(
        baseUrl: string,
        enableTelemetry?: boolean) {

        this.baseUrl = baseUrl;
        this.enableTelemetry = enableTelemetry ?? true;
    }

    proxy(proxyOptions?: ProxyOptions): this {
        this.proxyOptions = proxyOptions;
        return this;
    }

    timeout(milliseconds?: number): this {
        this.timeoutInMilliseconds = milliseconds;
        return this;
    }
}
