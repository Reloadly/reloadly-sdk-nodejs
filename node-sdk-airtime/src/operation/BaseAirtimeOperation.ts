import ReloadlyCore = require("@reloadly/reloadly.core");

export abstract class BaseAirtimeOperation extends ReloadlyCore.BaseOperation {

    protected readonly apiVersion: string;
    protected readonly apiToken: string;

    constructor(
        baseUrl: string, apiToken: string, apiVersion: string,
        enableTelemetry: boolean) {
        super(baseUrl, enableTelemetry);

        this.apiVersion = apiVersion;
        this.apiToken = apiToken;
    }

    protected createGetRequest<T>(relativeUrl: string, filter?: ReloadlyCore.QueryFilter): ReloadlyCore.IRequest<T> {
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

        let request: ReloadlyCore.CustomRequest<T> = new ReloadlyCore.CustomRequest<T>(url, "GET")
            .addHeader(ReloadlyCore.HttpHeader.ACCEPT, ReloadlyCore.Version.AIRTIME_V1.toString())
            .addHeader(ReloadlyCore.HttpHeader.AUTHORIZATION, "Bearer " + this.apiToken)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);

        request.apiVersion = this.apiVersion;
        request.enableTelemetry = this.enableTelemetry;

        return request;
    }

    protected createPostRequest<T>(relativeUrl: string, body: {}): ReloadlyCore.IRequest<T> {
        let request = new ReloadlyCore.CustomRequest<T>(this.baseUrl + "/" + relativeUrl, "POST")
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
