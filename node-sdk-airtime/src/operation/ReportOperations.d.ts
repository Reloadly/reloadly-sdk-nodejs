import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { TransactionHistoryOperations } from "./TransactionHistoryOperations";
export declare class ReportOperations extends BaseAirtimeOperation {
    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean);
    transactionsHistory(): TransactionHistoryOperations;
}
