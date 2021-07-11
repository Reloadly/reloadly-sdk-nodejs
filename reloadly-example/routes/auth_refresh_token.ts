import { AuthenticationApi } from "../../node-sdk-authentication/src/Authentication";
import { AirtimeApi } from "../../node-sdk-airtime/src/Airtime";
import { Environment, HttpHeader, ICustomizableRequest } from "../../node-sdk-core/src/Core";
import { ServiceURLs } from "../../node-sdk-core/src/Core";

import express = require('express');
import { ApiCredentials } from "../ApiCredentials";
import { Country } from "../../node-sdk-airtime/src/dto/response/Country";
const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
    var authApi = new AuthenticationApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, ServiceURLs.AIRTIME_SANDBOX);
    var operation = authApi.clientCredentials();
    var accessTokenRequest = operation.getAccessToken();
    var accessTokenResponse = await accessTokenRequest.execute();
    var accessToken = accessTokenResponse.access_token;

    var airtimeApi = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, accessToken, Environment.SANDBOX);
    var countriesOperation = await airtimeApi.countries();
    var countriesRequest = countriesOperation.list();

    // todo delete this block
    const customizableRequest: ICustomizableRequest<Country[]> = <ICustomizableRequest<Country[]>>countriesRequest;
    customizableRequest.addHeader(HttpHeader.AUTHORIZATION, "Bearer " + "invalid");

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
