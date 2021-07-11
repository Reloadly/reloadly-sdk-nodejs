/**
 * Class that represents an error captured when executing an http request to the Reloadly Server.
 */
export class ReloadlyException extends Error {
    constructor(m: string) {
        super(m);
        Object.setPrototypeOf(this, ReloadlyException.prototype);
    }
}
