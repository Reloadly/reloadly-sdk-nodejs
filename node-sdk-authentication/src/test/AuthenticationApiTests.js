"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var assert = require('assert');
const ReloadlyCore = require("@reloadly/reloadly.core");
const Authentication_1 = require("../Authentication");
const TestCredentials_1 = require("./TestCredentials");
describe('Authentication Api Tests', function () {
    it('Get Access Token', async function () {
        this.timeout(0);
        var authenticationApi = new Authentication_1.AuthenticationApi(TestCredentials_1.TestCredentials.ClientId(), TestCredentials_1.TestCredentials.ClientSecret(), ReloadlyCore.Service.AIRTIME_SANDBOX);
        var request = await authenticationApi.clientCredentials().getAccessToken();
        var token = await request.execute();
        assert.ok(token.access_token != null);
    });
});
//# sourceMappingURL=AuthenticationApiTests.js.map