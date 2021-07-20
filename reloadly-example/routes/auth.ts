import ReloadlyAuthentication = require("@reloadly/reloadly.authentication");
import ReloadlyCore = require("@reloadly/reloadly.core");

import express = require('express');
import { ApiCredentials } from "../ApiCredentials";
const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {

    var api = new ReloadlyAuthentication.AuthenticationApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, ReloadlyCore.ServiceURLs.AIRTIME_SANDBOX);
    var operation = api.clientCredentials();
    var request = operation.getAccessToken();

    var response = await request.execute();
    res.send("access token: " + response.access_token);
});

export default router;
