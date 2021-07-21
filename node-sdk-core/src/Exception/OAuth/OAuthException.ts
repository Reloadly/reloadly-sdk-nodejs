import { ApiException } from "../ApiException";

export class OAuthException extends ApiException {
    constructor(m: string, path: string, httpStatusCode: number) {
        super(m, path, httpStatusCode, null, null);
        Object.setPrototypeOf(this, OAuthException.prototype);
    }

    isExpiredToken(): boolean {
        return this.errorCode.toUpperCase() === 'TOKEN_EXPIRED';
    }
}
