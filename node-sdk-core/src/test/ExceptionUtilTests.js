"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../Dto/ApiError");
const ExceptionUtil_1 = require("../Internal/Util/ExceptionUtil");
var assert = require('assert');
describe('TelemetryUtil Tests', function () {
    it('Create ApiException', async function () {
        this.timeout(0);
        var now = new Date();
        var apiException = ExceptionUtil_1.ExceptionUtil.convert(new ApiError_1.ApiError("err msg", "err/path", now, "err-code", ["detail"], "https://reloadly.com/info"), 500);
        assert.ok(apiException.details[0] == "detail");
        assert.ok(apiException.errorCode == "err-code");
        assert.ok(apiException.httpStatusCode == 500);
        assert.ok(apiException.message == "err msg");
        assert.ok(apiException.path == "err/path");
        assert.ok(apiException.timeStamp == now);
    });
});
//# sourceMappingURL=ExceptionUtilTests.js.map