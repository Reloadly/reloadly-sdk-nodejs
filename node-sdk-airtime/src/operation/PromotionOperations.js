"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionOperations = void 0;
const BaseAirtimeOperation_1 = require("./BaseAirtimeOperation");
class PromotionOperations extends BaseAirtimeOperation_1.BaseAirtimeOperation {
    constructor(baseUrl, apiToken, apiVersion, enableTelemetry) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }
    list(filter) {
        return this.createGetRequest(PromotionOperations.END_POINT, filter);
    }
    getById(promotionId) {
        if (!promotionId || promotionId < 0)
            throw new Error("'promotionId' must be greater than 0.");
        return this.createGetRequest(PromotionOperations.END_POINT + "/" + promotionId);
    }
    getByCountryCode(countryCode) {
        if (!countryCode)
            throw new Error("'countryCode' must be provided.");
        return this.createGetRequest(PromotionOperations.END_POINT + "/" +
            PromotionOperations.PATH_SEGMENT_COUNTRIES + "/" +
            countryCode);
    }
    getByOperatorId(operatorId) {
        this.validateOperatorId(operatorId);
        return this.createGetRequest(PromotionOperations.END_POINT + "/" +
            PromotionOperations.PATH_SEGMENT_OPERATORS + "/" +
            operatorId);
    }
    validateOperatorId(operatorId) {
        if (!operatorId || operatorId < 0)
            throw new Error("'operatorId' must be greater than 0.");
    }
}
exports.PromotionOperations = PromotionOperations;
PromotionOperations.END_POINT = "promotions";
PromotionOperations.PATH_SEGMENT_COUNTRIES = "countries";
PromotionOperations.PATH_SEGMENT_OPERATORS = "operators";
//# sourceMappingURL=PromotionOperations.js.map