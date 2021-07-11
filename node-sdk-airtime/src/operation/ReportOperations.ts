import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { TransactionHistoryOperations } from "./TransactionHistoryOperations";

export class ReportOperations extends BaseAirtimeOperation {

    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }

    public transactionsHistory(): TransactionHistoryOperations {
        return new TransactionHistoryOperations(
            this.baseUrl, this.apiToken, this.apiVersion, this.enableTelemetry);
    }
}
