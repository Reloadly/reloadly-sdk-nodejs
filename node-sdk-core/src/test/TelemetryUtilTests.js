"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Telemetry_1 = require("../Internal/Net/Telemetry");
const TelemetryUtil_1 = require("../Internal/Util/TelemetryUtil");
var assert = require('assert');
describe('TelemetryUtil Tests', function () {
    it('Get Package Version', async function () {
        this.timeout(0);
        var version = TelemetryUtil_1.TelemetryUtil.getSDKVersion();
        assert.ok(version == "1.0.0");
    });
    it('Create Header Value', async function () {
        this.timeout(0);
        var telemetry = TelemetryUtil_1.TelemetryUtil.create("1.0");
        var headerValueBase64 = TelemetryUtil_1.TelemetryUtil.httpHeaderValue(telemetry);
        var headerValue = TelemetryUtil_1.TelemetryUtil.base64Decode(headerValueBase64);
        assert.ok(headerValue == '{"name":"reloadly-sdk-nodejs","api-version":"1.0","env":{"reloadly-sdk-nodejs":"1.0.0"}}');
    });
    it('Not Create Header Value', async function () {
        this.timeout(0);
        var headerValue = TelemetryUtil_1.TelemetryUtil.httpHeaderValue(new Telemetry_1.Telemetry(null));
        assert.ok(!headerValue);
    });
});
//# sourceMappingURL=TelemetryUtilTests.js.map