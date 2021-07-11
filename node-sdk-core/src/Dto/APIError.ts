export class ApiError {
    /**
     * Additional details that might be helpful in understanding the error(s) that occurred.
     */
    details: {}[];

    /**
     * For some errors that could be handled programmatically, a string summarizing the error reported.
     */
    errorCode: string;

    /**
     * Link to documentations containing additional info regarding the error.
     */
    infoLink: string;

    /**
     * A human-readable message providing more details about the error.
     */
    message: string;

    /**
     * The end-point that was used when the error occurred
     */
    path: string;

    /**
     * "The timestamp when the usage occurred"
     */
    timeStamp: Date;

    constructor(message: string, path: string, timeStamp: Date, errorCode?: string, details?: {}[], infoLink?: string) {
        this.message = message;
        this.path = path;
        this.timeStamp = timeStamp;
        this.errorCode = errorCode;
        this.details = details;
        this.infoLink = infoLink;
    }
}
