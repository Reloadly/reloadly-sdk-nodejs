"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAirtimeOperation = void 0;
const Core_1 = require("../../../node-sdk-core/src/Core");
class BaseAirtimeOperation extends Core_1.BaseOperation {
    constructor(baseUrl, apiToken, apiVersion, enableTelemetry) {
        super(baseUrl, enableTelemetry);
        this.apiVersion = apiVersion;
        this.apiToken = apiToken;
    }
    createGetRequest(relativeUrl, filter) {
        var url = this.baseUrl + "/" + relativeUrl;
        var qs = url.indexOf("?") == -1 ? "?" : "";
        if (filter) {
            for (var el in filter.parameters) {
                qs += el + "=" + filter.parameters[el];
                qs = qs + "&";
            }
        }
        // replace trailing '&' if any
        qs = qs.replace(/\&$/, "");
        // replace trailing '?' if any
        qs = qs.replace(/\?$/, "");
        url = url + qs;
        let request = new Core_1.CustomRequest(url, "GET")
            .addHeader(Core_1.HttpHeader.ACCEPT, Core_1.Version.AIRTIME_V1.toString())
            .addHeader(Core_1.HttpHeader.AUTHORIZATION, "Bearer " + this.apiToken)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
        request.apiVersion = this.apiVersion;
        request.enableTelemetry = this.enableTelemetry;
        return request;
    }
    createPostRequest(relativeUrl, body) {
        let request = new Core_1.CustomRequest(this.baseUrl + "/" + relativeUrl, "POST")
            .addHeader(Core_1.HttpHeader.ACCEPT, Core_1.Version.AIRTIME_V1.toString())
            .addHeader(Core_1.HttpHeader.CONTENT_TYPE, Core_1.MediaType.APPLICATION_JSON.toString())
            .addHeader(Core_1.HttpHeader.AUTHORIZATION, "Bearer " + this.apiToken)
            .setBody(body)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
        request.apiVersion = this.apiVersion;
        request.enableTelemetry = this.enableTelemetry;
        return request;
    }
}
exports.BaseAirtimeOperation = BaseAirtimeOperation;
//# sourceMappingURL=BaseAirtimeOperation.js.map