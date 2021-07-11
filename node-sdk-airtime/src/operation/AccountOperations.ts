import {
    IRequest
} from "../../../node-sdk-core/src/Core";

import { AccountBalanceInfo } from "../dto/response/AccountBalanceInfo";
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";

export class AccountOperations extends BaseAirtimeOperation {

    static readonly END_POINT = "accounts";
    static readonly PATH_BALANCE = "balance";

    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }

    public getBalance(): IRequest<AccountBalanceInfo> {
        var url = AccountOperations.END_POINT + "/" + AccountOperations.PATH_BALANCE;
        return this.createGetRequest(url);
    }
}
