import ReloadlyCore = require("@reloadly/reloadly.core");
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { Promotion } from "../dto/response/Promotion";

export class PromotionOperations extends BaseAirtimeOperation {

    static readonly END_POINT = "promotions";
    static readonly PATH_SEGMENT_COUNTRIES = "countries";
    static readonly PATH_SEGMENT_OPERATORS = "operators";

    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }

    public list(filter?: ReloadlyCore.QueryFilter): ReloadlyCore.IRequest<ReloadlyCore.Page<Promotion>> {
        return this.createGetRequest(PromotionOperations.END_POINT, filter);
    }

    public getById(promotionId: bigint): ReloadlyCore.IRequest<Promotion> {
        if (!promotionId || promotionId < 0) throw new Error("'promotionId' must be greater than 0.");
        return this.createGetRequest(PromotionOperations.END_POINT + "/" + promotionId);
    }

    public getByCountryCode(countryCode: string): ReloadlyCore.IRequest<Promotion[]> {
        if (!countryCode) throw new Error("'countryCode' must be provided.");
        return this.createGetRequest(
            PromotionOperations.END_POINT + "/" +
            PromotionOperations.PATH_SEGMENT_COUNTRIES + "/" +
            countryCode);
    }

    public getByOperatorId(operatorId: bigint): ReloadlyCore.IRequest<Promotion[]> {
        this.validateOperatorId(operatorId);
        return this.createGetRequest(
            PromotionOperations.END_POINT + "/" +
            PromotionOperations.PATH_SEGMENT_OPERATORS + "/" +
            operatorId);
    }

    validateOperatorId(operatorId: bigint) {
        if (!operatorId || operatorId < 0) throw new Error("'operatorId' must be greater than 0.");
    }
}
