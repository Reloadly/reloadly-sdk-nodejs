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
import { Phone, PhoneTopupRequest } from "../../node-sdk-airtime/src/Airtime";
const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {

    var api = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX);

    try {
        var operation = await api.topups();
    } catch (err) {
        res.send(err);
    }

    var request = operation.send(
        new PhoneTopupRequest(10, 537, new Phone("+447772235236", "GB"), true, new Phone("+447772235235", "GB")));

    try {
        var result = await request.execute();
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});

export default router;
