import { ApiException } from "../ApiException";
export declare class OAuthException extends ApiException {
    constructor(m: string, path: string, httpStatusCode: number);
    isExpiredToken(): boolean;
}
