"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const AirtimeApi_1 = require("../AirtimeApi");
const TestCredentials_1 = require("./TestCredentials");
var assert = require('assert');
describe('Account Operations Tests', function () {
    it('Get Balance', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId(), TestCredentials_1.TestCredentials.ClientSecret());
        var accounts = await airtimeApi.accounts();
        var req = accounts.getBalance();
        var res = await req.execute();
        assert.ok(Number(res.balance) !== 0, "getBalance failed.");
    });
});
//# sourceMappingURL=AccountOperationsTests.js.map