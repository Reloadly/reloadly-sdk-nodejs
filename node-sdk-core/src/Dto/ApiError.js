"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError {
    constructor(message, path, timeStamp, errorCode, details, infoLink) {
        this.message = message;
        this.path = path;
        this.timeStamp = timeStamp;
        this.errorCode = errorCode;
        this.details = details;
        this.infoLink = infoLink;
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=ApiError.js.map