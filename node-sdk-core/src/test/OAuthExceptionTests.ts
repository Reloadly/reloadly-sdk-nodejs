import { OAuthException } from "../Exception/OAuth/OAuthException";
var assert = require('assert');

describe('OAuthException Tests', function () {
    it('Get Expired', async function () {
        this.timeout(0);

        var ex = new OAuthException("msg", "p/a/t/h", 403);
        ex.errorCode = "TOKEN_EXPIRED";

        var expired = ex.isExpiredToken();
        assert.ok(expired);
    });
})
