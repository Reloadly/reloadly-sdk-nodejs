import { IRequest, Page, QueryFilter } from "../../../node-sdk-core/src/Core";
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { Discount } from "../dto/response/Discount";
export declare class DiscountOperations extends BaseAirtimeOperation {
    static readonly END_POINT = "operators";
    static readonly PATH_SEGMENT_DISCOUNT = "commissions";
    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean);
    list(filter?: QueryFilter): IRequest<Page<Discount>>;
    getByOperatorId(operatorId: bigint): IRequest<Discount>;
    validateOperatorId(operatorId: bigint): void;
}
