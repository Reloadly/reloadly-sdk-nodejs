import { AuthenticationApi } from "../../node-sdk-authentication/src/Authentication";
import { ServiceURLs } from "../../node-sdk-core/src/Core";

import express = require('express');
import { ApiCredentials } from "../ApiCredentials";
const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {

    var api = new AuthenticationApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, ServiceURLs.AIRTIME_SANDBOX);
    var operation = api.clientCredentials();
    var request = operation.getAccessToken();

    var response = await request.execute();
    res.send("access token: " + response.access_token);
});

export default router;
