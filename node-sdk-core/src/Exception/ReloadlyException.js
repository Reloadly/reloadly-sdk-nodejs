"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReloadlyException = void 0;
/**
 * Class that represents an error captured when executing an http request to the Reloadly Server.
 */
class ReloadlyException extends Error {
    constructor(m) {
        super(m);
        Object.setPrototypeOf(this, ReloadlyException.prototype);
    }
}
exports.ReloadlyException = ReloadlyException;
//# sourceMappingURL=ReloadlyException.js.map