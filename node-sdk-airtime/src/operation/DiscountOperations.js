"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountOperations = void 0;
const BaseAirtimeOperation_1 = require("./BaseAirtimeOperation");
class DiscountOperations extends BaseAirtimeOperation_1.BaseAirtimeOperation {
    constructor(baseUrl, apiToken, apiVersion, enableTelemetry) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }
    list(filter) {
        var url = DiscountOperations.END_POINT + "/" + DiscountOperations.PATH_SEGMENT_DISCOUNT;
        return this.createGetRequest(url, filter);
    }
    getByOperatorId(operatorId) {
        this.validateOperatorId(operatorId);
        var url = DiscountOperations.END_POINT + "/" + operatorId + "/" + DiscountOperations.PATH_SEGMENT_DISCOUNT;
        return this.createGetRequest(url);
    }
    validateOperatorId(operatorId) {
        if (!operatorId || operatorId < 0)
            throw new Error("'operatorId' must be greater than 0.");
    }
}
exports.DiscountOperations = DiscountOperations;
DiscountOperations.END_POINT = "operators";
DiscountOperations.PATH_SEGMENT_DISCOUNT = "commissions";
//# sourceMappingURL=DiscountOperations.js.map