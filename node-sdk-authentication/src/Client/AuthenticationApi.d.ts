import { Api } from "../../../node-sdk-core/src/Core";
import { OAuth2ClientCredentialsOperation } from "./OAuth2ClientCredentialsOperation";
/**
 * Class that provides an implementation of some of the Authentication and Authorization API methods
 */
export declare class AuthenticationApi extends Api {
    static readonly BASE_URL: string;
    service: string;
    constructor(clientId: string, clientSecret: string, service: string, enableLogging?: boolean, redactHeaders?: string[], enableTelemetry?: boolean);
    clientCredentials(): OAuth2ClientCredentialsOperation;
}
