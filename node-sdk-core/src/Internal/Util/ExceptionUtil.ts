import { ApiError } from "../../Dto/ApiError";
import { ApiException } from "../../Exception/ApiException";
import { OAuthException } from "../../Exception/OAuth/OAuthException";

export class ExceptionUtil {
    static convert(apiError: ApiError, httpStatusCode: number): ApiException {
        return this.setAdditionalFields(apiError, this.doGetApiException(apiError, httpStatusCode));
    }

    static doGetApiException(apiError: ApiError, httpStatusCode: number): ApiException {
        if (this.isAuthenticationError(apiError)) {
            return new OAuthException(apiError.message, apiError.path, httpStatusCode);
        }

        return new ApiException(apiError.message, apiError.path, httpStatusCode);
    }

    static isAuthenticationError(apiError: ApiError): boolean {
        return apiError.path && apiError.path.toLowerCase() == "/oauth/token";
    }

    static setAdditionalFields(apiError: ApiError, apiException: ApiException): ApiException {
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