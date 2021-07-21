"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionUtil = void 0;
const ApiException_1 = require("../../Exception/ApiException");
const OAuthException_1 = require("../../Exception/OAuth/OAuthException");
class ExceptionUtil {
    static convert(apiError, httpStatusCode) {
        return this.setAdditionalFields(apiError, this.doGetApiException(apiError, httpStatusCode));
    }
    static doGetApiException(apiError, httpStatusCode) {
        if (this.isAuthenticationError(apiError)) {
            return new OAuthException_1.OAuthException(apiError.message, apiError.path, httpStatusCode);
        }
        return new ApiException_1.ApiException(apiError.message, apiError.path, httpStatusCode);
    }
    static isAuthenticationError(apiError) {
        return apiError.path && apiError.path.toLowerCase() == "/oauth/token";
    }
    static setAdditionalFields(apiError, apiException) {
        if (apiError.errorCode != null && apiError.errorCode.trim() != "") {
            apiException.errorCode = apiError.errorCode;
        }
        if (apiError.timeStamp) {
            apiException.timeStamp = apiError.timeStamp;
        }
        if (apiError.details) {
            apiException.details = apiError.details;
        }
        return apiException;
    }
}
exports.ExceptionUtil = ExceptionUtil;
//# sourceMappingURL=ExceptionUtil.js.map