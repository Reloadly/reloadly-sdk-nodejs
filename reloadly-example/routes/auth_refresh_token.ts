import ReloadlyAirtime = require("@reloadly/reloadly.airtime");
import ReloadlyAuthentication = require("@reloadly/reloadly.authentication");
import ReloadlyCore = require("@reloadly/reloadly.core");

import express = require('express');
import { ApiCredentials } from "../ApiCredentials";
import { Country } from "../../node-sdk-airtime/src/dto/response/Country";
const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
    var authApi = new ReloadlyAuthentication.AuthenticationApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, ReloadlyCore.ServiceURLs.AIRTIME_SANDBOX);
    var operation = authApi.clientCredentials();
    var accessTokenRequest = operation.getAccessToken();
    var accessTokenResponse = await accessTokenRequest.execute();
    var accessToken = accessTokenResponse.access_token;

    var airtimeApi = new ReloadlyAirtime.AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, accessToken, ReloadlyCore.Environment.SANDBOX);
    var countriesOperation = await airtimeApi.countries();
    var countriesRequest = countriesOperation.list();

    // todo delete this block
    const customizableRequest: ReloadlyCore.ICustomizableRequest<Country[]> = <ReloadlyCore.ICustomizableRequest<Country[]>>countriesRequest;
    customizableRequest.addHeader(ReloadlyCore.HttpHeader.AUTHORIZATION, "Bearer " + "invalid");

    var countries;

    try {
        countries = await countriesRequest.execute();

        // todo delete these 2 lines
        await airtimeApi.refreshAccessToken(countriesRequest);
        countries = await countriesRequest.execute(); //Re-execute the request
    } catch (ex) {
        if (ex.errorCode.toUpperCase() === 'TOKEN_EXPIRED') {
            airtimeApi.refreshAccessToken(countriesRequest);
            countries = await countriesRequest.execute(); //Re-execute the request
        } else {
            //Handle other errors....
        }
    }
});

export default router;
