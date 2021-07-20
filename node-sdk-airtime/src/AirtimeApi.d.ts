import ReloadlyCore = require("@reloadly/reloadly.core");
import { AccountOperations } from "./operation/AccountOperations";
import { CountryOperations } from "./operation/CountryOperations";
import { DiscountOperations } from "./operation/DiscountOperations";
import { OperatorOperations } from "./operation/OperatorOperations";
import { PromotionOperations } from "./operation/PromotionOperations";
import { ReportOperations } from "./operation/ReportOperations";
import { TopupOperations } from "./operation/TopupOperations";
export declare class AirtimeApi extends ReloadlyCore.ServiceApi {
    private baseUrl;
    private environment;
    constructor(clientId?: string, clientSecret?: string, accessToken?: string, environment?: ReloadlyCore.Environment, enableLogging?: boolean, redactHeaders?: string[], enableTelemetry?: boolean);
    operators(): Promise<OperatorOperations>;
    countries(): Promise<CountryOperations>;
    accounts(): Promise<AccountOperations>;
    discounts(): Promise<DiscountOperations>;
    promotions(): Promise<PromotionOperations>;
    topups(): Promise<TopupOperations>;
    reports(): Promise<ReportOperations>;
    /**
     * Retrieve a new API access token to use on new calls.
     * This is useful when the token is about to expire or already has.
     *
     * @param request - The request to refresh the token for
     */
    refreshAccessToken<T>(request: ReloadlyCore.IRequest<T>): Promise<void>;
    private createBaseUrl;
    private getServiceByEnvironment;
    private retrieveAccessToken;
    private doGetAccessToken;
    private static getSDKVersion;
}
