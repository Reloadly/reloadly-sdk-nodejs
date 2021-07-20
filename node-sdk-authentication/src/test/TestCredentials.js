"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCredentials = void 0;
class TestCredentials {
    static ClientId() {
        return process.env.CLIENT_ID;
    }
    static ClientSecret() {
        return process.env.CLIENT_SECRET;
    }
}
exports.TestCredentials = TestCredentials;
//# sourceMappingURL=TestCredentials.js.map