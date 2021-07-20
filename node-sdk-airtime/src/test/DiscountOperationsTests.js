"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const Core_1 = require("../../../node-sdk-core/src/Core");
const AirtimeApi_1 = require("../AirtimeApi");
const TestCredentials_1 = require("./TestCredentials");
var assert = require('assert');
describe('Discount Operations Tests', function () {
    it('Get Account Balance With Page', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId(), TestCredentials_1.TestCredentials.ClientSecret());
        var operation = await airtimeApi.discounts();
        var req1 = operation.list();
        var res1 = await req1.execute();
        var req2 = operation.list(new Core_1.QueryFilter().withPage(2, 5));
        var res2 = await req2.execute();
        assert.ok(JSON.stringify(res1) != JSON.stringify(res2));
    });
    it('Get By Operator Id', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId(), TestCredentials_1.TestCredentials.ClientSecret());
        var operation = await airtimeApi.discounts();
        var req1 = operation.list(new Core_1.QueryFilter().withPage(2, 5));
        var res1 = await req1.execute();
        var operatorId = res1.content[0].operator.id;
        var req2 = operation.getByOperatorId(operatorId);
        var res2 = await req2.execute();
        assert.ok(operatorId === res2.operator.id);
    });
});
//# sourceMappingURL=DiscountOperationsTests.js.map