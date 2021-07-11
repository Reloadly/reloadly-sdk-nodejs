import { ProxyOptions } from "../Dto/Request/ProxyOptions";
export declare abstract class Api {
    static readonly KEY_CLIENT_ID = "client_id";
    static readonly KEY_CLIENT_SECRET = "client_secret";
    clientId: string;
    clientSecret: string;
    enableLogging: boolean;
    enableTelemetry: boolean;
    headersToRedact: string[];
    apiVersion: string;
    libraryVersion: string;
    proxyOptions?: ProxyOptions;
    timeoutInMilliseconds?: number;
    constructor(clientId: string, clientSecret: string, enableLogging?: boolean, redactHeaders?: string[], enableTelemetry?: boolean, libraryVersion?: string, apiVersion?: string);
    proxy(proxyOptions: ProxyOptions): this;
    timeout(milliseconds?: number): this;
}
