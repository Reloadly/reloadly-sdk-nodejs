import ReloadlyCore = require("@reloadly/reloadly.core");
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { Discount } from "../dto/response/Discount";
export declare class DiscountOperations extends BaseAirtimeOperation {
    static readonly END_POINT = "operators";
    static readonly PATH_SEGMENT_DISCOUNT = "commissions";
    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean);
    list(filter?: ReloadlyCore.QueryFilter): ReloadlyCore.IRequest<ReloadlyCore.Page<Discount>>;
    getByOperatorId(operatorId: bigint): ReloadlyCore.IRequest<Discount>;
    validateOperatorId(operatorId: bigint): void;
}
