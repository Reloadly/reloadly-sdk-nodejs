import ReloadlyCore = require('@reloadly/reloadly.core');
import { IOAuth2ClientCredentialsRequest } from "../Request/IOAuth2ClientCredentialsRequest";
export declare class OAuth2ClientCredentialsOperation extends ReloadlyCore.BaseOperation {
    static readonly KEY_CLIENT_ID = "client_id";
    static readonly KEY_CLIENT_SECRET = "client_secret";
    static readonly KEY_GRANT_TYPE = "grant_type";
    static readonly KEY_AUDIENCE = "audience";
    static readonly PATH_OAUTH = "oauth";
    static readonly PATH_TOKEN = "token";
    clientId: string;
    clientSecret: string;
    service: string;
    constructor(baseUrl: any, clientId: any, clientSecret: any, service: any, enableTelemetry?: boolean);
    /**
     * Creates a request to get a Token for the given audience using the 'Client Credentials' grant.
     * <pre>
     * {@code
     * AuthAPI auth = new AuthenticationAPI("B3c6RYhk1v9SbIJcRIOwu62gIUGsnze", "2679NfkaBn62e6w5E8zNEzjr-yWfkaBne");
     * try {
     *      TokenHolder result = auth.requestToken("https://topups.reloadly.com").execute();
     * } catch (APIException e) {
     *      //api error
     * } catch (ReloadlyException e) {
     *     // request error
     * } catch (Exception e) {
     *     // all other errors
     * }
     * }
     * </pre>
     *
     * @return a Request to configure and execute.
     */
    getAccessToken(): IOAuth2ClientCredentialsRequest;
}
