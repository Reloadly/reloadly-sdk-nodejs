"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHistoryOperations = void 0;
const BaseAirtimeOperation_1 = require("./BaseAirtimeOperation");
class TransactionHistoryOperations extends BaseAirtimeOperation_1.BaseAirtimeOperation {
    constructor(baseUrl, apiToken, apiVersion, enableTelemetry) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }
    list(filter) {
        this.validateStartAndEndDate(filter);
        return this.createGetRequest(TransactionHistoryOperations.TOPUP_TRANSACTION_HISTORY_END_POINT, filter);
    }
    getById(transactionId) {
        if (!transactionId || transactionId <= 0)
            throw new Error("'transactionId' must be greater than 0.");
        return this.createGetRequest(TransactionHistoryOperations.TOPUP_TRANSACTION_HISTORY_END_POINT + "/" + transactionId);
    }
    validateStartAndEndDate(filter) {
        if (!filter)
            return;
        if ((!filter.startDate && filter.endDate) || (filter.startDate && !filter.endDate)) {
            throw new Error("If start date is set, end date must be set as well and vice-versa");
        }
        else if (filter.startDate > filter.endDate) {
            throw new Error("The start date must NOT be greater than the end date");
        }
    }
}
exports.TransactionHistoryOperations = TransactionHistoryOperations;
TransactionHistoryOperations.TOPUP_TRANSACTION_HISTORY_END_POINT = "topups/reports/transactions";
//# sourceMappingURL=TransactionHistoryOperations.js.map