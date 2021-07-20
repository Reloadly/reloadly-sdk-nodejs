"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAirtimeOperation = void 0;
const ReloadlyCore = require("@reloadly/reloadly.core");
class BaseAirtimeOperation extends ReloadlyCore.BaseOperation {
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
        let request = new ReloadlyCore.CustomRequest(url, "GET")
            .addHeader(ReloadlyCore.HttpHeader.ACCEPT, ReloadlyCore.Version.AIRTIME_V1.toString())
            .addHeader(ReloadlyCore.HttpHeader.AUTHORIZATION, "Bearer " + this.apiToken)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);
        request.apiVersion = this.apiVersion;
        request.enableTelemetry = this.enableTelemetry;
        return request;
    }
    createPostRequest(relativeUrl, body) {
        let request = new ReloadlyCore.CustomRequest(this.baseUrl + "/" + relativeUrl, "POST")
            .addHeader(ReloadlyCore.HttpHeader.ACCEPT, ReloadlyCore.Version.AIRTIME_V1.toString())
            .addHeader(ReloadlyCore.HttpHeader.CONTENT_TYPE, ReloadlyCore.MediaType.APPLICATION_JSON.toString())
            .addHeader(ReloadlyCore.HttpHeader.AUTHORIZATION, "Bearer " + this.apiToken)
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