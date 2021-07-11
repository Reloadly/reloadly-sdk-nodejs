import { ApiException } from "./ApiException";

export class RateLimitException extends ApiException {
    constructor(m: string, path: string, httpStatusCode: number, errorCode: string, details: []) {
        super(m, path, httpStatusCode, errorCode, details);
        Object.setPrototypeOf(this, ApiException.prototype);
    }

    limit: bigint;
    remaining: bigint;
    expectedResetTimestamp: bigint;
}
