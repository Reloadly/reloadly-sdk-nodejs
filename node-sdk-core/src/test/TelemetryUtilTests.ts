import { Telemetry } from "../Internal/Net/Telemetry";
import { TelemetryUtil } from "../Internal/Util/TelemetryUtil";

var assert = require('assert');

describe('TelemetryUtil Tests', function () {
    it('Get Package Version', async function () {
        this.timeout(0);

        var version = TelemetryUtil.getSDKVersion();
        assert.ok(version == "1.0.0");
    });

    it('Create Header Value', async function () {
        this.timeout(0);

        var telemetry = TelemetryUtil.create("1.0");
        var headerValueBase64 = TelemetryUtil.httpHeaderValue(telemetry);
        var headerValue = TelemetryUtil.base64Decode(headerValueBase64);
        assert.ok(headerValue == '{"name":"reloadly-sdk-nodejs","api-version":"1.0","env":{"reloadly-sdk-nodejs":"1.0.0"}}');
    });

    it('Not Create Header Value', async function () {
        this.timeout(0);

        var headerValue = TelemetryUtil.httpHeaderValue(new Telemetry(null));
        assert.ok(!headerValue);
    });
})
