import { ApiCredentials } from "../ApiCredentials";

import ReloadlyAirtime = require("@reloadly/reloadly.airtime");
import ReloadlyCore = require("@reloadly/reloadly.core");

import express = require('express');
const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {

    var api = new ReloadlyAirtime.AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, ReloadlyCore.Environment.SANDBOX);

    try {
        var operation = await api.accounts();
    } catch (err) {
        res.send(err);
    }

    var request = operation.getBalance();

    var balanceInfo = await request.execute();
    res.send(balanceInfo);
});

export default router;
