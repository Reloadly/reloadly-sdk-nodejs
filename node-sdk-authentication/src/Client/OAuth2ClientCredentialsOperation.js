"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2ClientCredentialsOperation = void 0;
const ReloadlyCore = require("@reloadly/reloadly.core");
const TokenRequest_1 = require("../Request/TokenRequest");
class OAuth2ClientCredentialsOperation extends ReloadlyCore.BaseOperation {
    constructor(baseUrl, clientId, clientSecret, service, enableTelemetry = true) {
        super(baseUrl, enableTelemetry);
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
    getAccessToken() {
        if (!this.service) {
            throw new Error("'service' was not provided.");
        }
        let audience = this.service;
        if (!audience.startsWith("https://") || audience.startsWith("http://")) {
            audience = "https://" + audience;
        }
        const url = this.baseUrl + "/" + OAuth2ClientCredentialsOperation.PATH_OAUTH + "/" + OAuth2ClientCredentialsOperation.PATH_TOKEN;
        let request = new TokenRequest_1.TokenRequest(url);
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
exports.OAuth2ClientCredentialsOperation = OAuth2ClientCredentialsOperation;
OAuth2ClientCredentialsOperation.KEY_CLIENT_ID = "client_id";
OAuth2ClientCredentialsOperation.KEY_CLIENT_SECRET = "client_secret";
OAuth2ClientCredentialsOperation.KEY_GRANT_TYPE = "grant_type";
OAuth2ClientCredentialsOperation.KEY_AUDIENCE = "audience";
OAuth2ClientCredentialsOperation.PATH_OAUTH = "oauth";
OAuth2ClientCredentialsOperation.PATH_TOKEN = "token";
//# sourceMappingURL=OAuth2ClientCredentialsOperation.js.map