import ReloadlyCore = require("@reloadly/reloadly.core");
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { TopupTransaction } from "../dto/response/TopupTransaction";
import { TransactionHistoryFilter } from "../filter/TransactionHistoryFilter";

export class TransactionHistoryOperations extends BaseAirtimeOperation {

    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }

    static readonly TOPUP_TRANSACTION_HISTORY_END_POINT = "topups/reports/transactions";

    public list(filter?: TransactionHistoryFilter): ReloadlyCore.IRequest<ReloadlyCore.Page<TopupTransaction>> {
        this.validateStartAndEndDate(filter);
        return this.createGetRequest(TransactionHistoryOperations.TOPUP_TRANSACTION_HISTORY_END_POINT, filter);
    }

    public getById(transactionId: bigint): ReloadlyCore.IRequest<TopupTransaction> {
        if (!transactionId || transactionId <= 0) throw new Error("'transactionId' must be greater than 0.");
        return this.createGetRequest(
            TransactionHistoryOperations.TOPUP_TRANSACTION_HISTORY_END_POINT + "/" + transactionId);
    }

    private validateStartAndEndDate(filter?: TransactionHistoryFilter) {
        if (!filter) return;
        if ((!filter.startDate && filter.endDate) || (filter.startDate && !filter.endDate)) {
            throw new Error("If start date is set, end date must be set as well and vice-versa");
        } else if (filter.startDate > filter.endDate) {
            throw new Error("The start date must NOT be greater than the end date");
        }
    }
}
