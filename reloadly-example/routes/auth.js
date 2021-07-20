"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReloadlyAuthentication = require("@reloadly/reloadly.authentication");
const ReloadlyCore = require("@reloadly/reloadly.core");
const express = require("express");
const ApiCredentials_1 = require("../ApiCredentials");
const router = express.Router();
router.get('/', async (req, res) => {
    var api = new ReloadlyAuthentication.AuthenticationApi(ApiCredentials_1.ApiCredentials.ClientId, ApiCredentials_1.ApiCredentials.ClientSecret, ReloadlyCore.ServiceURLs.AIRTIME_SANDBOX);
    var operation = api.clientCredentials();
    var request = operation.getAccessToken();
    var response = await request.execute();
    res.send("access token: " + response.access_token);
});
exports.default = router;
//# sourceMappingURL=auth.js.map