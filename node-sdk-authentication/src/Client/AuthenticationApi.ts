import ReloadlyCore = require('@reloadly/reloadly.core');
import { OAuth2ClientCredentialsOperation } from "./OAuth2ClientCredentialsOperation";

/**
 * Class that provides an implementation of some of the Authentication and Authorization API methods
 */
export class AuthenticationApi extends ReloadlyCore.Api {

    static readonly BASE_URL: string = "https://auth.reloadly.com";

    service: string;

    constructor(clientId: string, clientSecret: string,
        service: string, enableLogging: boolean = true,
        redactHeaders: string[] = [], enableTelemetry: boolean = true) {

        super(clientId, clientSecret, enableLogging, redactHeaders, enableTelemetry);

        if (!clientId) throw new Error("'clientId' must be provided.");
        if (!clientSecret) throw new Error("'clientSecret' must be provided.");
        if (!service) throw new Error("'service' must be provided.");

        this.service = service;
    }

    public clientCredentials(): OAuth2ClientCredentialsOperation {
        return new OAuth2ClientCredentialsOperation(AuthenticationApi.BASE_URL, this.clientId, this.clientSecret, this.service)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }
}
