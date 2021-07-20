"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const AirtimeApi_1 = require("../AirtimeApi");
const TestCredentials_1 = require("./TestCredentials");
var assert = require('assert');
describe('Country Operations Tests', function () {
    it('Get Country', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId(), TestCredentials_1.TestCredentials.ClientSecret());
        var operation = await airtimeApi.countries();
        var req = operation.getByCode("AF");
        var res = await req.execute();
        assert.ok(res.name === "Afghanistan");
    });
    it('List Countries', async function () {
        this.timeout(0);
        var airtimeApi = new AirtimeApi_1.AirtimeApi(TestCredentials_1.TestCredentials.ClientId(), TestCredentials_1.TestCredentials.ClientSecret());
        var operation = await airtimeApi.countries();
        var req = operation.list();
        var res = await req.execute();
        assert.ok(res.length > 0);
        assert.ok(res[0].name === "Afghanistan");
    });
});
//# sourceMappingURL=CountryOperationsTests.js.map