"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitException = void 0;
const ApiException_1 = require("./ApiException");
class RateLimitException extends ApiException_1.ApiException {
    constructor(m, path, httpStatusCode, errorCode, details) {
        super(m, path, httpStatusCode, errorCode, details);
        Object.setPrototypeOf(this, ApiException_1.ApiException.prototype);
    }
}
exports.RateLimitException = RateLimitException;
//# sourceMappingURL=RateLimitException.js.map