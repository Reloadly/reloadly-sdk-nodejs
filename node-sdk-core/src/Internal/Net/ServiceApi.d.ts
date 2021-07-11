import { Api } from "../../Core";
export declare abstract class ServiceApi extends Api {
    protected accessToken: string;
    protected cacheAccessToken: boolean;
    constructor(clientId?: string, clientSecret?: string, accessToken?: string, enableLogging?: boolean, redactHeaders?: string[], enableTelemetry?: boolean, sdkVersion?: string, apiVersion?: string);
    /**
     * Retrieve a new API access token to use on new calls.
     * This is useful when the token is about to expire or already has.
     *
     * @param request - The request to refresh the token for
     * @throws ReloadlyException - Error captured when executing an http request to the Reloadly Server
     */
    abstract refreshAccessToken(request: {}): any;
    isAccessTokenCached(): boolean;
    validateCredentials(): void;
    /**
     * Update the API access token to use on new calls.
     * This is useful when the token is about to expire or already has.
     *
     * @param accessToken the token to authenticate the calls with.
     */
    setAccessToken(accessToken: string): void;
    validateAccessToken(accessToken: string): string;
}
