require('dotenv').config();
import { AirtimeApi } from "../AirtimeApi";
import { TestCredentials } from "./TestCredentials";

var assert = require('assert');

describe('Account Operations Tests', function () {
    it('Get Balance', async function () {
        this.timeout(0);

        var airtimeApi = new AirtimeApi(
            TestCredentials.ClientId(),
            TestCredentials.ClientSecret());

        var accounts = await airtimeApi.accounts();
        var req = accounts.getBalance();
        var res = await req.execute();
        assert.ok(Number(res.balance) !== 0, "getBalance failed.");
    })
})