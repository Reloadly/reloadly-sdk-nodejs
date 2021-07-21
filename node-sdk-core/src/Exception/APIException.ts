import { ReloadlyException } from "./ReloadlyException";

/**
 * Class that represents an Reloadly Server error captured from a http response. Provides different methods to get a clue of why the request failed.
 */
export class ApiException extends ReloadlyException {
    constructor(m: string, path?: string, httpStatusCode?: number, errorCode?: string, details?: {}[]) {
        super(m);
        this.httpStatusCode = httpStatusCode;
        this.path = path;
        Object.setPrototypeOf(this, ApiException.prototype);
    }

    /**
     * The end-point that was used when the error occurred
     */
    path?: string;

    /**
     * HTTP status indicate whether a specific HTTP request has been successfully completed.
     * Responses are grouped in five classes: informational responses, successful responses,
     * redirects, client errors, and servers errors.
     * See <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html</a>
     */
    httpStatusCode: number;

    /**
     * For some errors that could be handled programmatically, a string summarizing the error reported.
     */
    errorCode: string;

    /**
     * Additional details that might be helpful in understanding the error(s) that occurred.
     */
    details: {}[];

    /**
     * "The timestamp when the usage occurred"
     */
    timeStamp: Date;
}
