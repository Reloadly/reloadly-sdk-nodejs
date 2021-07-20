import { TelemetryUtil } from "../Internal/Util/TelemetryUtil";

var assert = require('assert');

describe('TelemetryUtil Tests', function () {
    it('Get Package Version', async function () {
        this.timeout(0);

        var version = TelemetryUtil.getSDKVersion();
        assert.ok(version == "1.0.0");
    })
})
