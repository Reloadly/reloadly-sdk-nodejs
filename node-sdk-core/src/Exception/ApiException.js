"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiException = void 0;
const ReloadlyException_1 = require("./ReloadlyException");
/**
 * Class that represents an Reloadly Server error captured from a http response. Provides different methods to get a clue of why the request failed.
 */
class ApiException extends ReloadlyException_1.ReloadlyException {
    constructor(m, path, httpStatusCode, errorCode, details) {
        super(m);
        this.httpStatusCode = httpStatusCode;
        this.path = path;
        Object.setPrototypeOf(this, ApiException.prototype);
    }
}
exports.ApiException = ApiException;
//# sourceMappingURL=ApiException.js.map