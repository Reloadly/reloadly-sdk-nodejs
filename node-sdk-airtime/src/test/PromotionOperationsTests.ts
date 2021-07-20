require('dotenv').config();
import { AirtimeApi } from "../AirtimeApi";
import { TestCredentials } from "./TestCredentials";

var assert = require('assert');

describe('Promotion Operations Tests', function () {
    it('Get By Country Code', async function () {
        this.timeout(0);

        var airtimeApi = new AirtimeApi(
            TestCredentials.ClientId(),
            TestCredentials.ClientSecret());

        var promoOp = await airtimeApi.promotions();
        var promoReq = promoOp.list();
        var promoRes = await promoReq.execute();
        var promo = promoRes.content[0];

        var operOp = await airtimeApi.operators();
        var operReq = operOp.getById(promo.operatorId);
        var operRes = await operReq.execute();

        var req = promoOp.getByCountryCode(operRes.country.isoName);
        var res = await req.execute();

        assert.ok(res.length > 0);
    });

    it('Get By Id', async function () {
        this.timeout(0);

        var airtimeApi = new AirtimeApi(
            TestCredentials.ClientId(),
            TestCredentials.ClientSecret());

        var promoOp = await airtimeApi.promotions();
        var promoReq = promoOp.list();
        var promoRes = await promoReq.execute();
        var promo = promoRes.content[0];

        var req = promoOp.getById(promo.id);
        var res = await req.execute();

        assert.ok(promo.id === res.id);
    });

    it('Get By Operator Id', async function () {
        this.timeout(0);

        var airtimeApi = new AirtimeApi(
            TestCredentials.ClientId(),
            TestCredentials.ClientSecret());

        var promoOp = await airtimeApi.promotions();
        var promoReq = promoOp.list();
        var promoRes = await promoReq.execute();
        var promo = promoRes.content[0];

        var req = promoOp.getByOperatorId(promo.operatorId);
        var res = await req.execute();

        assert.ok(res[0].operatorId === promo.operatorId);
    });
});
