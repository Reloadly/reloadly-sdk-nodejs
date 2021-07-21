"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomRequest_1 = require("../Internal/Dto/Request/CustomRequest");
const ProxyOptions_1 = require("../Internal/Dto/Request/ProxyOptions");
const ProxyOptionsAuth_1 = require("../Internal/Dto/Request/ProxyOptionsAuth");
var assert = require('assert');
describe('CustomRequest Tests', function () {
    it('Get Properties', async function () {
        this.timeout(0);
        var req = new CustomRequest_1.CustomRequest("https://reloadly.com", "POST");
        req.addHeader("test-header", "test-header-val");
        req.proxy(new ProxyOptions_1.ProxyOptions("reloadly-proxy.com", "81", "https", new ProxyOptionsAuth_1.ProxyOptionsAuth("test-user", "test-pass")));
        req.setBody({ "test-prop": "test-prop-val" });
        assert.ok(req.method == "POST");
        assert.ok(req.url == "https://reloadly.com");
        assert.ok(req.proxyOptions.auth.username == "test-user");
        assert.ok(req.proxyOptions.auth.password == "test-pass");
        assert.ok(req.proxyOptions.host == "reloadly-proxy.com");
        assert.ok(req.proxyOptions.port == "81");
        assert.ok(req.proxyOptions.protocol == "https");
        assert.ok(req.headers["test-header"] == "test-header-val");
        assert.ok(req.createRequest().body["test-prop"] == "test-prop-val");
        var axiosOptions = req.proxyOptions.axiosOptions();
        assert.ok(axiosOptions.host == "reloadly-proxy.com");
        assert.ok(axiosOptions.port == "81");
        assert.ok(axiosOptions["protocol"] == "https");
        assert.ok(axiosOptions["auth"]["username"] == "test-user");
        assert.ok(axiosOptions["auth"]["password"] == "test-pass");
    });
    it('Make Request', async function () {
        this.timeout(0);
        var req = new CustomRequest_1.CustomRequest("https://run.mocky.io/v3/07800d21-740a-44ed-b550-cf7ec646711e", "GET");
        req.enableTelemetry = true;
        req.timeout(10000);
        var res = await req.execute();
        assert.ok(res["test-resp-body"] == "test-resp-body-val");
    });
    it('Throw Exception When Invalid URL', async function () {
        this.timeout(0);
        // returns 404
        var req = new CustomRequest_1.CustomRequest("https://run.mocky.io/v3/a1a6ff7b-128f-4fb9-91dc-184a0b138155", "GET");
        try {
            await req.execute();
        }
        catch (err) {
            assert.ok(err.httpStatusCode == 404);
        }
    });
    it('Throw Exception When Invalid Proxy', async function () {
        this.timeout(0);
        var req = new CustomRequest_1.CustomRequest("https://error.com", "GET");
        req.proxy(new ProxyOptions_1.ProxyOptions("invalid-proxy-host", "1"));
        try {
            await req.execute();
        }
        catch (err) {
            assert.ok(err.message == "No response from server, please try again or contact support");
        }
    });
});
//# sourceMappingURL=CustomRequestTests.js.map