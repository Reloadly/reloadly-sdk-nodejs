"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiCredentials_1 = require("../ApiCredentials");
const Airtime_1 = require("../../node-sdk-airtime/src/Airtime");
const Core_1 = require("../../node-sdk-core/src/Core");
const express = require("express");
const router = express.Router();
router.get('/', async (req, res) => {
    var api = new Airtime_1.AirtimeApi(ApiCredentials_1.ApiCredentials.ClientId, ApiCredentials_1.ApiCredentials.ClientSecret, null, Core_1.Environment.SANDBOX);
    try {
        var operation = await api.accounts();
    }
    catch (err) {
        res.send(err);
    }
    var request = operation.getBalance();
    var balanceInfo = await request.execute();
    res.send(balanceInfo);
});
exports.default = router;
//# sourceMappingURL=balance.js.map