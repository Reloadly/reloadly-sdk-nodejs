import { IRequest } from "../../../node-sdk-core/src/Core";
import { AccountBalanceInfo } from "../dto/response/AccountBalanceInfo";
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
export declare class AccountOperations extends BaseAirtimeOperation {
    static readonly END_POINT = "accounts";
    static readonly PATH_BALANCE = "balance";
    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean);
    getBalance(): IRequest<AccountBalanceInfo>;
}
