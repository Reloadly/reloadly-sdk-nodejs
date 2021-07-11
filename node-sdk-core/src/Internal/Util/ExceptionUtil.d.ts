import { ApiError } from "../../Dto/ApiError";
import { ApiException } from "../../Exception/ApiException";
export declare class ExceptionUtil {
    static convert(apiError: ApiError, httpStatusCode: number): ApiException;
    static doGetApiException(apiError: ApiError, httpStatusCode: number): ApiException;
    static isAuthenticationError(apiError: ApiError): boolean;
    static setAdditionalFields(apiError: ApiError, apiException: ApiException): ApiException;
}
