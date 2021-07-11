"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Authentication_1 = require("../../node-sdk-authentication/src/Authentication");
const Core_1 = require("../../node-sdk-core/src/Core");
const express = require("express");
const ApiCredentials_1 = require("../ApiCredentials");
const router = express.Router();
router.get('/', async (req, res) => {
    var api = new Authentication_1.AuthenticationApi(ApiCredentials_1.ApiCredentials.ClientId, ApiCredentials_1.ApiCredentials.ClientSecret, Core_1.ServiceURLs.AIRTIME_SANDBOX);
    var operation = api.clientCredentials();
    var request = operation.getAccessToken();
    var response = await request.execute();
    res.send("access token: " + response.access_token);
});
exports.default = router;
//# sourceMappingURL=auth.js.map