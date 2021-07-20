import ReloadlyCore = require('@reloadly/reloadly.core');
import { IOAuth2ClientCredentialsRequest } from "../Request/IOAuth2ClientCredentialsRequest";
import { TokenRequest } from "../Request/TokenRequest";

export class OAuth2ClientCredentialsOperation extends ReloadlyCore.BaseOperation {

    static readonly KEY_CLIENT_ID = "client_id";
    static readonly KEY_CLIENT_SECRET = "client_secret";
    static readonly KEY_GRANT_TYPE = "grant_type";
    static readonly KEY_AUDIENCE = "audience";

    static readonly PATH_OAUTH = "oauth";
    static readonly PATH_TOKEN = "token";

    clientId: string;
    clientSecret: string;
    service: string;

    constructor(baseUrl, clientId, clientSecret, service, enableTelemetry: boolean = true) {
        super(baseUrl, enableTelemetry)
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.service = service;
    }

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
    public getAccessToken(): IOAuth2ClientCredentialsRequest {

        if (!this.service) {
            throw new Error("'service' was not provided.");
        }

        let audience: string = this.service;

        if (!audience.startsWith("https://") || audience.startsWith("http://")) {
            audience = "https://" + audience;
        }

        const url = this.baseUrl + "/" + OAuth2ClientCredentialsOperation.PATH_OAUTH + "/" + OAuth2ClientCredentialsOperation.PATH_TOKEN;

        let request: TokenRequest = new TokenRequest(url);
        request.body[OAuth2ClientCredentialsOperation.KEY_CLIENT_ID] = this.clientId;
        request.body[OAuth2ClientCredentialsOperation.KEY_CLIENT_SECRET] = this.clientSecret;
        request.body[OAuth2ClientCredentialsOperation.KEY_GRANT_TYPE] = ReloadlyCore.GrantType.CLIENT_CREDENTIALS;
        request.setAudience(audience);
        request
            .addHeader("Accept", "application/json")
            .addHeader("Content-Type", "application/json")
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);

        return request;
    }
}
