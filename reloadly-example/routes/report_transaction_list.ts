import {
    ApiCredentials
} from "../ApiCredentials";

import {
    AirtimeApi
} from "../../node-sdk-airtime/src/Airtime";

import {
    Environment
} from "../../node-sdk-core/src/Core";

import express = require('express');
const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {

    var api = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX);

    try {
        var reportsOperation = await api.reports();
        var operation = reportsOperation.transactionsHistory();
    } catch (err) {
        res.send(err);
    }

    try {
        var request = operation.list();
        var result = await request.execute();
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});

export default router;
