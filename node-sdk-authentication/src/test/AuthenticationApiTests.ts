var assert = require('assert');

import { Service } from "../../../node-sdk-core/src/Core";
import { AuthenticationApi } from "../Authentication";
import { TestCredentials } from "./TestCredentials";

describe('Authentication Api Tests', function () {
    it('Get Access Token', async function () {
        this.timeout(0);

        var authenticationApi = new AuthenticationApi(
            TestCredentials.ClientId,
            TestCredentials.ClientSecret,
            Service.AIRTIME_SANDBOX
        );

        var request = await authenticationApi.clientCredentials().getAccessToken();
        var token = await request.execute();
        assert.ok(token.access_token != null);
    })
})