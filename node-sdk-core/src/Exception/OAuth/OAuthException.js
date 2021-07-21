"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthException = void 0;
const ApiException_1 = require("../ApiException");
class OAuthException extends ApiException_1.ApiException {
    constructor(m, path, httpStatusCode) {
        super(m, path, httpStatusCode, null, null);
        Object.setPrototypeOf(this, OAuthException.prototype);
    }
    isExpiredToken() {
        return this.errorCode.toUpperCase() === 'TOKEN_EXPIRED';
    }
}
exports.OAuthException = OAuthException;
//# sourceMappingURL=OAuthException.js.map