require('dotenv').config();
import { AirtimeApi } from "../AirtimeApi";
import { TestCredentials } from "./TestCredentials";

var assert = require('assert');

describe('Country Operations Tests', function () {
    it('Get Country', async function () {
        this.timeout(0);

        var airtimeApi = new AirtimeApi(
            TestCredentials.ClientId(),
            TestCredentials.ClientSecret());

        var operation = await airtimeApi.countries();
        var req = operation.getByCode("AF");
        var res = await req.execute();
        assert.ok(res.name === "Afghanistan");
    });

    it('List Countries', async function () {
        this.timeout(0);

        var airtimeApi = new AirtimeApi(
            TestCredentials.ClientId(),
            TestCredentials.ClientSecret());

        var operation = await airtimeApi.countries();
        var req = operation.list();
        var res = await req.execute();
        assert.ok(res.length > 0);
        assert.ok(res[0].name === "Afghanistan");
    });
});