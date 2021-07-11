"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceApi = void 0;
const jwt_decode_1 = require("jwt-decode");
const Core_1 = require("../../Core");
class ServiceApi extends Core_1.Api {
    constructor(clientId, clientSecret, accessToken, enableLogging = false, redactHeaders = [], enableTelemetry = true, sdkVersion, apiVersion) {
        super(clientId, clientSecret, enableLogging, redactHeaders, enableTelemetry, sdkVersion, apiVersion);
        this.accessToken = this.validateAccessToken(accessToken);
        this.cacheAccessToken = accessToken ? true : false;
    }
    isAccessTokenCached() {
        return this.cacheAccessToken;
    }
    validateCredentials() {
        if (!this.accessToken && (!this.clientId || !this.clientSecret)) {
            throw new Error("Either a valid access token or both client id and client secret must be provided");
        }
    }
    /**
     * Update the API access token to use on new calls.
     * This is useful when the token is about to expire or already has.
     *
     * @param accessToken the token to authenticate the calls with.
     */
    setAccessToken(accessToken) {
        if (!accessToken) {
            throw new Error("'accessToken' was not provided.");
        }
        this.accessToken = this.validateAccessToken(accessToken);
    }
    validateAccessToken(accessToken) {
        let decoded;
        try {
            decoded = jwt_decode_1.default(accessToken);
        }
        catch (InvalidTokenError) {
            return null;
        }
        const expirationDate = new Date(decoded.exp * 1000);
        var timeLeftInMilliseconds = new Date().getTime() - expirationDate.getTime();
        const timeLeftInSeconds = timeLeftInMilliseconds / 1000;
        return timeLeftInSeconds < 300 ? null : accessToken;
    }
}
exports.ServiceApi = ServiceApi;
//# sourceMappingURL=ServiceApi.js.map