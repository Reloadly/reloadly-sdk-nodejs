"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountOperations = void 0;
const BaseAirtimeOperation_1 = require("./BaseAirtimeOperation");
class AccountOperations extends BaseAirtimeOperation_1.BaseAirtimeOperation {
    constructor(baseUrl, apiToken, apiVersion, enableTelemetry) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }
    getBalance() {
        var url = AccountOperations.END_POINT + "/" + AccountOperations.PATH_BALANCE;
        return this.createGetRequest(url);
    }
}
exports.AccountOperations = AccountOperations;
AccountOperations.END_POINT = "accounts";
AccountOperations.PATH_BALANCE = "balance";
//# sourceMappingURL=AccountOperations.js.map