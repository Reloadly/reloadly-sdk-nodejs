require('dotenv').config();
var assert = require('assert');
import ReloadlyCore = require('@reloadly/reloadly.core');
import { AuthenticationApi } from "../Authentication";
import { TestCredentials } from "./TestCredentials";

describe('Authentication Api Tests', function () {
    it('Get Access Token', async function () {
        this.timeout(0);

        var authenticationApi = new AuthenticationApi(
            TestCredentials.ClientId(),
            TestCredentials.ClientSecret(),
            ReloadlyCore.Service.AIRTIME_SANDBOX
        );

        var request = await authenticationApi.clientCredentials().getAccessToken();
        var token = await request.execute();
        assert.ok(token.access_token != null);
    })
})