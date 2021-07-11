import { ApiException } from "./ApiException";
export declare class RateLimitException extends ApiException {
    constructor(m: string, path: string, httpStatusCode: number, errorCode: string, details: []);
    limit: bigint;
    remaining: bigint;
    expectedResetTimestamp: bigint;
}
