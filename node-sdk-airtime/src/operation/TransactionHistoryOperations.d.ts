import ReloadlyCore = require("@reloadly/reloadly.core");
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { TopupTransaction } from "../dto/response/TopupTransaction";
import { TransactionHistoryFilter } from "../filter/TransactionHistoryFilter";
export declare class TransactionHistoryOperations extends BaseAirtimeOperation {
    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean);
    static readonly TOPUP_TRANSACTION_HISTORY_END_POINT = "topups/reports/transactions";
    list(filter?: TransactionHistoryFilter): ReloadlyCore.IRequest<ReloadlyCore.Page<TopupTransaction>>;
    getById(transactionId: bigint): ReloadlyCore.IRequest<TopupTransaction>;
    private validateStartAndEndDate;
}
