"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseOperation = void 0;
class BaseOperation {
    constructor(baseUrl, enableTelemetry) {
        this.baseUrl = baseUrl;
        this.enableTelemetry = enableTelemetry ?? true;
    }
    proxy(proxyOptions) {
        this.proxyOptions = proxyOptions;
        return this;
    }
    timeout(milliseconds) {
        this.timeoutInMilliseconds = milliseconds;
        return this;
    }
}
exports.BaseOperation = BaseOperation;
//# sourceMappingURL=BaseOperation.js.map