import ReloadlyCore = require("@reloadly/reloadly.core");
import { AccountBalanceInfo } from "../dto/response/AccountBalanceInfo";
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";

export class AccountOperations extends BaseAirtimeOperation {

    static readonly END_POINT = "accounts";
    static readonly PATH_BALANCE = "balance";

    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }

    public getBalance(): ReloadlyCore.IRequest<AccountBalanceInfo> {
        var url = AccountOperations.END_POINT + "/" + AccountOperations.PATH_BALANCE;
        return this.createGetRequest(url);
    }
}
