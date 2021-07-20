"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiCredentials_1 = require("../ApiCredentials");
const ReloadlyAirtime = require("@reloadly/reloadly.airtime");
const ReloadlyCore = require("@reloadly/reloadly.core");
const express = require("express");
const router = express.Router();
router.get('/', async (req, res) => {
    var api = new ReloadlyAirtime.AirtimeApi(ApiCredentials_1.ApiCredentials.ClientId, ApiCredentials_1.ApiCredentials.ClientSecret, null, ReloadlyCore.Environment.SANDBOX);
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