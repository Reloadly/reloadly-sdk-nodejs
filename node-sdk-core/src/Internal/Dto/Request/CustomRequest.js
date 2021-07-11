"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRequest = void 0;
const BaseRequest_1 = require("./BaseRequest");
class CustomRequest extends BaseRequest_1.BaseRequest {
    constructor(url, method = "GET", headers = {}, body = null) {
        super();
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.body = body;
    }
    createRequest() {
        return {
            method: this.method,
            url: this.url,
            headers: this.headers,
            body: this.body
        };
    }
    addHeader(name, value) {
        this.headers[name] = value;
        return this;
    }
    setBody(value) {
        this.body = value;
        return this;
    }
    createBody() {
        if (this.body) {
            return this.body;
        }
        return null;
    }
}
exports.CustomRequest = CustomRequest;
//# sourceMappingURL=CustomRequest.js.map