"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const Airtime_1 = require("../Airtime");
const AirtimeApi_1 = require("../AirtimeApi");
const Phone_1 = require("../dto/response/Phone");
const TestCredentials_1 = require("./TestCredentials");
var assert = require('assert');
describe('Topup Operations Tests', function () {
    it('Topup', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId(), TestCredentials_1.TestCredentials.ClientSecret());
        var operOp = await airtimeApi.operators();
        var operReq = operOp.listByCountryCode("GB");
        var operRes = await operReq.execute();
        var operatorId = Number(operRes[0].id);
        var operation = await airtimeApi.topups();
        var req = operation.send(new Airtime_1.PhoneTopupRequest(10, operatorId, new Phone_1.Phone("+447772235236", "GB"), true, new Phone_1.Phone("+447772235235", "GB")));
        var res = await req.execute();
        assert.ok("447772235236" === res.recipientPhone);
    });
});
//# sourceMappingURL=TopupOperationsTests.js.map