import { IRequest, Page, QueryFilter } from "../../../node-sdk-core/src/Core";
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { Promotion } from "../dto/response/Promotion";
export declare class PromotionOperations extends BaseAirtimeOperation {
    static readonly END_POINT = "promotions";
    static readonly PATH_SEGMENT_COUNTRIES = "countries";
    static readonly PATH_SEGMENT_OPERATORS = "operators";
    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean);
    list(filter?: QueryFilter): IRequest<Page<Promotion>>;
    getById(promotionId: bigint): IRequest<Promotion>;
    getByCountryCode(countryCode: string): IRequest<Promotion[]>;
    getByOperatorId(operatorId: bigint): IRequest<Promotion[]>;
    validateOperatorId(operatorId: bigint): void;
}
