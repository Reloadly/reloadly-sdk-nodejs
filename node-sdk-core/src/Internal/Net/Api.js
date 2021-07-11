"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
class Api {
    constructor(clientId, clientSecret, enableLogging = false, redactHeaders, enableTelemetry = true, libraryVersion, apiVersion) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.enableLogging = enableLogging;
        this.headersToRedact = redactHeaders ?? [];
        this.libraryVersion = libraryVersion;
        this.apiVersion = apiVersion;
        this.enableTelemetry = enableTelemetry;
    }
    proxy(proxyOptions) {
        this.proxyOptions = proxyOptions;
        return this;
    }
    timeout(milliseconds) {
        this.timeoutInMilliseconds = milliseconds;
        return this;
    }
}
exports.Api = Api;
Api.KEY_CLIENT_ID = "client_id";
Api.KEY_CLIENT_SECRET = "client_secret";
//# sourceMappingURL=Api.js.map