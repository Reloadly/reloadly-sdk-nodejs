require('dotenv').config();
import { QueryFilter } from "../../../node-sdk-core/src/Core";
import { AirtimeApi } from "../AirtimeApi";
import { TestCredentials } from "./TestCredentials";

var assert = require('assert');

describe('Discount Operations Tests', function () {
    it('Get Account Balance With Page', async function () {
        this.timeout(0);

        var airtimeApi = new AirtimeApi(
            TestCredentials.ClientId(),
            TestCredentials.ClientSecret());

        var operation = await airtimeApi.discounts();
        var req1 = operation.list();
        var res1 = await req1.execute();

        var req2 = operation.list(new QueryFilter().withPage(2, 5));
        var res2 = await req2.execute();

        assert.ok(JSON.stringify(res1) != JSON.stringify(res2));
    });

    it('Get By Operator Id', async function () {
        this.timeout(0);

        var airtimeApi = new AirtimeApi(
            TestCredentials.ClientId(),
            TestCredentials.ClientSecret());

        var operation = await airtimeApi.discounts();
        var req1 = operation.list(new QueryFilter().withPage(2, 5));
        var res1 = await req1.execute();
        var operatorId = res1.content[0].operator.id;

        var req2 = operation.getByOperatorId(operatorId);
        var res2 = await req2.execute();

        assert.ok(operatorId === res2.operator.id);
    });
});