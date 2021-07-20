"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirtimeApi = void 0;
const ReloadlyAuthentication = require("@reloadly/reloadly.authentication");
const ReloadlyCore = require("@reloadly/reloadly.core");
const AccountOperations_1 = require("./operation/AccountOperations");
const CountryOperations_1 = require("./operation/CountryOperations");
const DiscountOperations_1 = require("./operation/DiscountOperations");
const OperatorOperations_1 = require("./operation/OperatorOperations");
const PromotionOperations_1 = require("./operation/PromotionOperations");
const ReportOperations_1 = require("./operation/ReportOperations");
const TopupOperations_1 = require("./operation/TopupOperations");
class AirtimeApi extends ReloadlyCore.ServiceApi {
    constructor(clientId = null, clientSecret = null, accessToken = null, environment = ReloadlyCore.Environment.SANDBOX, enableLogging = false, redactHeaders = [], enableTelemetry = true) {
        super(clientId, clientSecret, accessToken, enableLogging, redactHeaders, enableTelemetry, AirtimeApi.getSDKVersion(), ReloadlyCore.Version.AIRTIME_V1);
        this.validateCredentials();
        this.environment = environment;
        this.baseUrl = this.createBaseUrl();
    }
    async operators() {
        var accessToken = await this.retrieveAccessToken();
        return new OperatorOperations_1.OperatorOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }
    async countries() {
        var accessToken = await this.retrieveAccessToken();
        return new CountryOperations_1.CountryOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }
    async accounts() {
        var accessToken = await this.retrieveAccessToken();
        return new AccountOperations_1.AccountOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }
    async discounts() {
        var accessToken = await this.retrieveAccessToken();
        return new DiscountOperations_1.DiscountOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }
    async promotions() {
        var accessToken = await this.retrieveAccessToken();
        return new PromotionOperations_1.PromotionOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }
    async topups() {
        var accessToken = await this.retrieveAccessToken();
        return new TopupOperations_1.TopupOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }
    async reports() {
        var accessToken = await this.retrieveAccessToken();
        return new ReportOperations_1.ReportOperations(this.baseUrl, accessToken, this.apiVersion, this.enableTelemetry)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
    }
    /**
     * Retrieve a new API access token to use on new calls.
     * This is useful when the token is about to expire or already has.
     *
     * @param request - The request to refresh the token for
     */
    async refreshAccessToken(request) {
        this.accessToken = null;
        const customizableRequest = request;
        const newAccessToken = await this.retrieveAccessToken();
        customizableRequest.addHeader(ReloadlyCore.HttpHeader.AUTHORIZATION, "Bearer " + newAccessToken);
    }
    createBaseUrl() {
        return this.getServiceByEnvironment(this.environment).toString();
    }
    getServiceByEnvironment(environment) {
        return (environment == ReloadlyCore.Environment.LIVE) ? ReloadlyCore.Service.AIRTIME : ReloadlyCore.Service.AIRTIME_SANDBOX;
    }
    async retrieveAccessToken() {
        var service = this.getServiceByEnvironment(this.environment);
        const accessToken = await this.doGetAccessToken(service);
        if (this.cacheAccessToken) {
            this.accessToken = accessToken;
        }
        return accessToken;
    }
    async doGetAccessToken(service) {
        if (this.accessToken) {
            return this.accessToken;
        }
        ;
        var authApi = new ReloadlyAuthentication.AuthenticationApi(this.clientId, this.clientSecret, service, this.enableLogging, this.headersToRedact, this.enableTelemetry)
            .proxy(this.proxyOptions);
        var request = authApi.clientCredentials().getAccessToken();
        var tokenHolder = await request.execute();
        return tokenHolder.access_token;
    }
    static getSDKVersion() {
        return "ES2020";
    }
}
exports.AirtimeApi = AirtimeApi;
//# sourceMappingURL=AirtimeApi.js.map