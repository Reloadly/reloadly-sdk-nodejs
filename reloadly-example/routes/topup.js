"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiCredentials_1 = require("../ApiCredentials");
const Airtime_1 = require("../../node-sdk-airtime/src/Airtime");
const Core_1 = require("../../node-sdk-core/src/Core");
const express = require("express");
const Airtime_2 = require("../../node-sdk-airtime/src/Airtime");
const router = express.Router();
router.get('/', async (req, res) => {
    var api = new Airtime_1.AirtimeApi(ApiCredentials_1.ApiCredentials.ClientId, ApiCredentials_1.ApiCredentials.ClientSecret, null, Core_1.Environment.SANDBOX);
    try {
        var operation = await api.topups();
    }
    catch (err) {
        res.send(err);
    }
    var request = operation.send(new Airtime_2.PhoneTopupRequest(10, 537, new Airtime_2.Phone("+447772235236", "GB"), true, new Airtime_2.Phone("+447772235235", "GB")));
    try {
        var result = await request.execute();
        res.send(result);
    }
    catch (err) {
        res.send(err);
    }
});
exports.default = router;
//# sourceMappingURL=topup.js.map