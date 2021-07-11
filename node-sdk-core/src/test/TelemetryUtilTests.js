"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TelemetryUtil_1 = require("../Internal/Util/TelemetryUtil");
var assert = require('assert');
describe('Account Operations Tests', function () {
    it('Get Package Version', async function () {
        this.timeout(0);
        var version = TelemetryUtil_1.TelemetryUtil.getSDKVersion();
        assert.ok(version == "1.0");
    });
});
//# sourceMappingURL=TelemetryUtilTests.js.map