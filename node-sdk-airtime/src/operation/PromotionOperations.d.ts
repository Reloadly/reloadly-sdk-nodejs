import ReloadlyCore = require("@reloadly/reloadly.core");
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { Promotion } from "../dto/response/Promotion";
export declare class PromotionOperations extends BaseAirtimeOperation {
    static readonly END_POINT = "promotions";
    static readonly PATH_SEGMENT_COUNTRIES = "countries";
    static readonly PATH_SEGMENT_OPERATORS = "operators";
    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean);
    list(filter?: ReloadlyCore.QueryFilter): ReloadlyCore.IRequest<ReloadlyCore.Page<Promotion>>;
    getById(promotionId: bigint): ReloadlyCore.IRequest<Promotion>;
    getByCountryCode(countryCode: string): ReloadlyCore.IRequest<Promotion[]>;
    getByOperatorId(operatorId: bigint): ReloadlyCore.IRequest<Promotion[]>;
    validateOperatorId(operatorId: bigint): void;
}
