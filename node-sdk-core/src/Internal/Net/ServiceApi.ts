import jwt_decode from "jwt-decode";
import { Api } from "../../Core";

export abstract class ServiceApi extends Api {

    protected accessToken: string;
    protected cacheAccessToken: boolean;

    constructor(clientId?: string, clientSecret?: string, accessToken?: string,
        enableLogging: boolean = false, redactHeaders: string[] = [],
        enableTelemetry: boolean = true, sdkVersion?: string, apiVersion?: string) {

        super(
            clientId, clientSecret, enableLogging, redactHeaders,
            enableTelemetry, sdkVersion, apiVersion);

        this.accessToken = this.validateAccessToken(accessToken);
        this.cacheAccessToken = accessToken ? true : false;
    }

    /**
     * Retrieve a new API access token to use on new calls.
     * This is useful when the token is about to expire or already has.
     *
     * @param request - The request to refresh the token for
     * @throws ReloadlyException - Error captured when executing an http request to the Reloadly Server
     */
    abstract refreshAccessToken(request: {});

    isAccessTokenCached(): boolean {
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
    setAccessToken(accessToken: string) {
        if (!accessToken) {
            throw new Error("'accessToken' was not provided.");
        }
        this.accessToken = this.validateAccessToken(accessToken);
    }

    validateAccessToken(accessToken: string): string {

        let decoded: { exp };
        try {
            decoded = jwt_decode(accessToken);
        } catch (InvalidTokenError) {
            return null;
        }

        const expirationDate: Date = new Date(decoded.exp * 1000);
        var timeLeftInMilliseconds = new Date().getTime() - expirationDate.getTime();
        const timeLeftInSeconds = timeLeftInMilliseconds / 1000;

        return timeLeftInSeconds < 300 ? null : accessToken;
    }
}
