"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const AirtimeApi_1 = require("../AirtimeApi");
const TestCredentials_1 = require("./TestCredentials");
var assert = require('assert');
describe('TransactionHistory Operations Tests', function () {
    it('List Transaction History', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId(), TestCredentials_1.TestCredentials.ClientSecret());
        var reportOp = await airtimeApi.reports();
        var operation = reportOp.transactionsHistory();
        var req = operation.list();
        var res = await req.execute();
        assert.ok(res.content.length > 0);
    });
    it('Get By Id', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId(), TestCredentials_1.TestCredentials.ClientSecret());
        var reportOp = await airtimeApi.reports();
        var operation = reportOp.transactionsHistory();
        var listReq = operation.list();
        var listRes = await listReq.execute();
        var req = operation.getById(listRes.content[0].transactionId);
        var res = await req.execute();
        assert.ok(listRes.content[0].transactionId === res.transactionId);
    });
});
//# sourceMappingURL=TransactionHistoryOperationsTests.js.map