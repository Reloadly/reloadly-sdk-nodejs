"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRequest = void 0;
const Core_1 = require("../../../node-sdk-core/src/Core");
class TokenRequest extends Core_1.CustomRequest {
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