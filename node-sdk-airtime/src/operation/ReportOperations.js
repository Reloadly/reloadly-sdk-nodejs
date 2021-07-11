"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportOperations = void 0;
const BaseAirtimeOperation_1 = require("./BaseAirtimeOperation");
const TransactionHistoryOperations_1 = require("./TransactionHistoryOperations");
class ReportOperations extends BaseAirtimeOperation_1.BaseAirtimeOperation {
    constructor(baseUrl, apiToken, apiVersion, enableTelemetry) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }
    transactionsHistory() {
        return new TransactionHistoryOperations_1.TransactionHistoryOperations(this.baseUrl, this.apiToken, this.apiVersion, this.enableTelemetry);
    }
}
exports.ReportOperations = ReportOperations;
//# sourceMappingURL=ReportOperations.js.map