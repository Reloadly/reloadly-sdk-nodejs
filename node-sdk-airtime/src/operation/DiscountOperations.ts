import ReloadlyCore = require("@reloadly/reloadly.core");
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { Discount } from "../dto/response/Discount";

export class DiscountOperations extends BaseAirtimeOperation {

    static readonly END_POINT = "operators";
    static readonly PATH_SEGMENT_DISCOUNT = "commissions";

    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }

    public list(filter?: ReloadlyCore.QueryFilter): ReloadlyCore.IRequest<ReloadlyCore.Page<Discount>> {
        var url = DiscountOperations.END_POINT + "/" + DiscountOperations.PATH_SEGMENT_DISCOUNT;
        return this.createGetRequest(url, filter);
    }

    public getByOperatorId(operatorId: bigint): ReloadlyCore.IRequest<Discount> {
        this.validateOperatorId(operatorId);
        var url = DiscountOperations.END_POINT + "/" + operatorId + "/" + DiscountOperations.PATH_SEGMENT_DISCOUNT;
        return this.createGetRequest(url);
    }

    validateOperatorId(operatorId: bigint) {
        if (!operatorId || operatorId < 0) throw new Error("'operatorId' must be greater than 0.");
    }
}
