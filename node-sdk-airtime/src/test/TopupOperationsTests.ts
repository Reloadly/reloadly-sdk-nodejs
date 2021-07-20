require('dotenv').config();
import { PhoneTopupRequest } from "../Airtime";
import { AirtimeApi } from "../AirtimeApi";
import { Phone } from "../dto/response/Phone";
import { TestCredentials } from "./TestCredentials";

var assert = require('assert');

describe('Topup Operations Tests', function () {
    it('Topup', async function () {
        this.timeout(0);

        var airtimeApi = new AirtimeApi(
            TestCredentials.ClientId(),
            TestCredentials.ClientSecret());

        var operOp = await airtimeApi.operators();
        var operReq = operOp.listByCountryCode("GB");
        var operRes = await operReq.execute();
        var operatorId = Number(operRes[0].id);

        var operation = await airtimeApi.topups();
        var req = operation.send(new PhoneTopupRequest(
            10, operatorId, new Phone("+447772235236", "GB"), true, new Phone("+447772235235", "GB")));
        var res = await req.execute();

        assert.ok("447772235236" === res.recipientPhone);
    });
});
