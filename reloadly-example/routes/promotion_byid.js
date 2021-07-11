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
        var operation = await api.promotions();
    }
    catch (err) {
        res.send(err);
    }
    var request = operation.getById(BigInt(5665));
    var result = await request.execute();
    res.send(result);
});
exports.default = router;
//# sourceMappingURL=promotion_byid.js.map