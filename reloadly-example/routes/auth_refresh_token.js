"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Authentication_1 = require("../../node-sdk-authentication/src/Authentication");
const Airtime_1 = require("../../node-sdk-airtime/src/Airtime");
const Core_1 = require("../../node-sdk-core/src/Core");
const Core_2 = require("../../node-sdk-core/src/Core");
const express = require("express");
const ApiCredentials_1 = require("../ApiCredentials");
const router = express.Router();
router.get('/', async (req, res) => {
    var authApi = new Authentication_1.AuthenticationApi(ApiCredentials_1.ApiCredentials.ClientId, ApiCredentials_1.ApiCredentials.ClientSecret, Core_2.ServiceURLs.AIRTIME_SANDBOX);
    var operation = authApi.clientCredentials();
    var accessTokenRequest = operation.getAccessToken();
    var accessTokenResponse = await accessTokenRequest.execute();
    var accessToken = accessTokenResponse.access_token;
    var airtimeApi = new Airtime_1.AirtimeApi(ApiCredentials_1.ApiCredentials.ClientId, ApiCredentials_1.ApiCredentials.ClientSecret, accessToken, Core_1.Environment.SANDBOX);
    var countriesOperation = await airtimeApi.countries();
    var countriesRequest = countriesOperation.list();
    // todo delete this block
    const customizableRequest = countriesRequest;
    customizableRequest.addHeader(Core_1.HttpHeader.AUTHORIZATION, "Bearer " + "invalid");
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