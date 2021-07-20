import ReloadlyAuthentication = require("@reloadly/reloadly.authentication");
import ReloadlyCore = require("@reloadly/reloadly.core");
import { AccountOperations } from "./operation/AccountOperations";
import { CountryOperations } from "./operation/CountryOperations";
import { DiscountOperations } from "./operation/DiscountOperations";
import { OperatorOperations } from "./operation/OperatorOperations";
import { PromotionOperations } from "./operation/PromotionOperations";
import { ReportOperations } from "./operation/ReportOperations";
import { TopupOperations } from "./operation/TopupOperations";

export class AirtimeApi extends ReloadlyCore.ServiceApi {

    private baseUrl: string;
    private environment: ReloadlyCore.Environment;

    constructor(
        clientId: string = null, clientSecret: string = null, accessToken: string = null,
        environment: ReloadlyCore.Environment = ReloadlyCore.Environment.SANDBOX, enableLogging: boolean = false,
        redactHeaders: string[] = [],
        enableTelemetry: boolean = true) {

        super(
            clientId, clientSecret, accessToken,
            enableLogging, redactHeaders,
            enableTelemetry,
            AirtimeApi.getSDKVersion(), ReloadlyCore.Version.AIRTIME_V1);

        this.validateCredentials();
        this.environment = environment;
        this.baseUrl = this.createBaseUrl();
    }

    async operators(): Promise<OperatorOperations> {
        var accessToken = await this.retrieveAccessToken();
        return new OperatorOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }

    async countries(): Promise<CountryOperations> {
        var accessToken = await this.retrieveAccessToken();
        return new CountryOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }

    async accounts(): Promise<AccountOperations> {
        var accessToken = await this.retrieveAccessToken();
        return new AccountOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }

    async discounts(): Promise<DiscountOperations> {
        var accessToken = await this.retrieveAccessToken();
        return new DiscountOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }

    async promotions(): Promise<PromotionOperations> {
       var accessToken = await this.retrieveAccessToken();
        return new PromotionOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }

    async topups(): Promise<TopupOperations> {
       var accessToken = await this.retrieveAccessToken();
        return new TopupOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }

    async reports(): Promise<ReportOperations> {
       var accessToken = await this.retrieveAccessToken();
        return new ReportOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }

    /**
     * Retrieve a new API access token to use on new calls.
     * This is useful when the token is about to expire or already has.
     *
     * @param request - The request to refresh the token for
     */
    async refreshAccessToken<T>(request: ReloadlyCore.IRequest<T>) {
        this.accessToken = null;
        const customizableRequest: ReloadlyCore.ICustomizableRequest<T> = <ReloadlyCore.ICustomizableRequest<T>>request;
        const newAccessToken: string = await this.retrieveAccessToken();
        customizableRequest.addHeader(ReloadlyCore.HttpHeader.AUTHORIZATION, "Bearer " + newAccessToken);
    }

    private createBaseUrl(): string {
        return this.getServiceByEnvironment(this.environment).toString();
    }

    private getServiceByEnvironment(environment: ReloadlyCore.Environment): ReloadlyCore.Service {
        return (environment == ReloadlyCore.Environment.LIVE) ? ReloadlyCore.Service.AIRTIME : ReloadlyCore.Service.AIRTIME_SANDBOX;
    }

    private async retrieveAccessToken(): Promise<string> {
        var service = this.getServiceByEnvironment(this.environment);
        const accessToken: string = await this.doGetAccessToken(service);
        if (this.cacheAccessToken) {
            this.accessToken = accessToken;
        }
        return accessToken;
    }

    private async doGetAccessToken(service: ReloadlyCore.Service): Promise<string> {
        if (this.accessToken) {
            return this.accessToken;
        };

        var authApi =
            new ReloadlyAuthentication.AuthenticationApi(
                this.clientId, this.clientSecret, service, this.enableLogging, this.headersToRedact, this.enableTelemetry)
                .proxy(this.proxyOptions);

        var request = authApi.clientCredentials().getAccessToken();
        var tokenHolder = await request.execute();
        return tokenHolder.access_token;
    }

    private static getSDKVersion(): string {
        return "ES2020";
    }
}