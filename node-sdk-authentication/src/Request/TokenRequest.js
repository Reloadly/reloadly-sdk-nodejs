"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRequest = void 0;
const ReloadlyCore = require("@reloadly/reloadly.core");
class TokenRequest extends ReloadlyCore.CustomRequest {
    constructor(url) {
        super(url, "POST", {}, {});
    }
    setAudience(audience) {
        this.body["audience"] = audience;
        return this;
    }
}
exports.TokenRequest = TokenRequest;
//# sourceMappingURL=TokenRequest.js.map