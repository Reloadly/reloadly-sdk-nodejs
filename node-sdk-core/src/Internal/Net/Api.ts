import { ProxyOptions } from "../Dto/Request/ProxyOptions";

export abstract class Api {

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

    constructor(clientId: string, clientSecret: string,
        enableLogging: boolean = false, redactHeaders?: string[],
        enableTelemetry: boolean = true, libraryVersion?: string, apiVersion?: string) {

        this.clientId = clientId;
        this.clientSecret = clientSecret;

        this.enableLogging = enableLogging;
        this.headersToRedact = redactHeaders ?? [];
        this.libraryVersion = libraryVersion;
        this.apiVersion = apiVersion;
        this.enableTelemetry = enableTelemetry;
    }

    proxy(proxyOptions: ProxyOptions): this {
        this.proxyOptions = proxyOptions;
        return this;
    }

    timeout(milliseconds?: number): this {
        this.timeoutInMilliseconds = milliseconds;
        return this;
    }
}
