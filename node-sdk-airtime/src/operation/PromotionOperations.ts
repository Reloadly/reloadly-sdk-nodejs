import {
    IRequest,
    Page,
    QueryFilter
} from "../../../node-sdk-core/src/Core";

import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { Promotion } from "../dto/response/Promotion";

export class PromotionOperations extends BaseAirtimeOperation {

    static readonly END_POINT = "promotions";
    static readonly PATH_SEGMENT_COUNTRIES = "countries";
    static readonly PATH_SEGMENT_OPERATORS = "operators";

    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }

    public list(filter?: QueryFilter): IRequest<Page<Promotion>> {
        return this.createGetRequest(PromotionOperations.END_POINT, filter);
    }

    public getById(promotionId: bigint): IRequest<Promotion> {
        if (!promotionId || promotionId < 0) throw new Error("'promotionId' must be greater than 0.");
        return this.createGetRequest(PromotionOperations.END_POINT + "/" + promotionId);
    }

    public getByCountryCode(countryCode: string): IRequest<Promotion[]> {
        if (!countryCode) throw new Error("'countryCode' must be provided.");
        return this.createGetRequest(
            PromotionOperations.END_POINT + "/" +
            PromotionOperations.PATH_SEGMENT_COUNTRIES + "/" +
            countryCode);
    }

    public getByOperatorId(operatorId: bigint): IRequest<Promotion[]> {
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
