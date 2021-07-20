"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationApi = void 0;
const ReloadlyCore = require("@reloadly/reloadly.core");
const OAuth2ClientCredentialsOperation_1 = require("./OAuth2ClientCredentialsOperation");
/**
 * Class that provides an implementation of some of the Authentication and Authorization API methods
 */
class AuthenticationApi extends ReloadlyCore.Api {
    constructor(clientId, clientSecret, service, enableLogging = true, redactHeaders = [], enableTelemetry = true) {
        super(clientId, clientSecret, enableLogging, redactHeaders, enableTelemetry);
        if (!clientId)
            throw new Error("'clientId' must be provided.");
        if (!clientSecret)
            throw new Error("'clientSecret' must be provided.");
        if (!service)
            throw new Error("'service' must be provided.");
        this.service = service;
    }
    clientCredentials() {
        return new OAuth2ClientCredentialsOperation_1.OAuth2ClientCredentialsOperation(AuthenticationApi.BASE_URL, this.clientId, this.clientSecret, this.service)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }
}
exports.AuthenticationApi = AuthenticationApi;
AuthenticationApi.BASE_URL = "https://auth.reloadly.com";
//# sourceMappingURL=AuthenticationApi.js.map