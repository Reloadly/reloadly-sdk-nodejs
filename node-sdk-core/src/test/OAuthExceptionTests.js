"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OAuthException_1 = require("../Exception/OAuth/OAuthException");
var assert = require('assert');
describe('OAuthException Tests', function () {
    it('Get Expired', async function () {
        this.timeout(0);
        var ex = new OAuthException_1.OAuthException("msg", "p/a/t/h", 403);
        ex.errorCode = "TOKEN_EXPIRED";
        var expired = ex.isExpiredToken();
        assert.ok(expired);
    });
});
//# sourceMappingURL=OAuthExceptionTests.js.map