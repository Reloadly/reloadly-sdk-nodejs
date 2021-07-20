"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReloadlyAirtime = require("@reloadly/reloadly.airtime");
const ReloadlyAuthentication = require("@reloadly/reloadly.authentication");
const ReloadlyCore = require("@reloadly/reloadly.core");
const express = require("express");
const ApiCredentials_1 = require("../ApiCredentials");
const router = express.Router();
router.get('/', async (req, res) => {
    var authApi = new ReloadlyAuthentication.AuthenticationApi(ApiCredentials_1.ApiCredentials.ClientId, ApiCredentials_1.ApiCredentials.ClientSecret, ReloadlyCore.ServiceURLs.AIRTIME_SANDBOX);
    var operation = authApi.clientCredentials();
    var accessTokenRequest = operation.getAccessToken();
    var accessTokenResponse = await accessTokenRequest.execute();
    var accessToken = accessTokenResponse.access_token;
    var airtimeApi = new ReloadlyAirtime.AirtimeApi(ApiCredentials_1.ApiCredentials.ClientId, ApiCredentials_1.ApiCredentials.ClientSecret, accessToken, ReloadlyCore.Environment.SANDBOX);
    var countriesOperation = await airtimeApi.countries();
    var countriesRequest = countriesOperation.list();
    // todo delete this block
    const customizableRequest = countriesRequest;
    customizableRequest.addHeader(ReloadlyCore.HttpHeader.AUTHORIZATION, "Bearer " + "invalid");
    var countries;
    try {
        countries = await countriesRequest.execute();
        // todo delete these 2 lines
        await airtimeApi.refreshAccessToken(countriesRequest);
        countries = await countriesRequest.execute(); //Re-execute the request
    }
    catch (ex) {
        if (ex.errorCode.toUpperCase() === 'TOKEN_EXPIRED') {
            airtimeApi.refreshAccessToken(countriesRequest);
            countries = await countriesRequest.execute(); //Re-execute the request
        }
        else {
            //Handle other errors....
        }
    }
});
exports.default = router;
//# sourceMappingURL=auth_refresh_token.js.map