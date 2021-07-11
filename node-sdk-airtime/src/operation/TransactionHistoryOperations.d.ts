import { IRequest, Page } from "../../../node-sdk-core/src/Core";
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { TopupTransaction } from "../dto/response/TopupTransaction";
import { TransactionHistoryFilter } from "../filter/TransactionHistoryFilter";
export declare class TransactionHistoryOperations extends BaseAirtimeOperation {
    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean);
    static readonly TOPUP_TRANSACTION_HISTORY_END_POINT = "topups/reports/transactions";
    list(filter?: TransactionHistoryFilter): IRequest<Page<TopupTransaction>>;
    getById(transactionId: bigint): IRequest<TopupTransaction>;
    private validateStartAndEndDate;
}
