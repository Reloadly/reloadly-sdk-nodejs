import {
    BaseOperation,
    CustomRequest,
    HttpHeader,
    IRequest,
    MediaType,
    QueryFilter,
    Version
} from "../../../node-sdk-core/src/Core";

export abstract class BaseAirtimeOperation extends BaseOperation {

    protected readonly apiVersion: string;
    protected readonly apiToken: string;

    constructor(
        baseUrl: string, apiToken: string, apiVersion: string,
        enableTelemetry: boolean) {
        super(baseUrl, enableTelemetry);

        this.apiVersion = apiVersion;
        this.apiToken = apiToken;
    }

    protected createGetRequest<T>(relativeUrl: string, filter?: QueryFilter): IRequest<T> {
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

        let request: CustomRequest<T> = new CustomRequest<T>(url, "GET")
            .addHeader(HttpHeader.ACCEPT, Version.AIRTIME_V1.toString())
            .addHeader(HttpHeader.AUTHORIZATION, "Bearer " + this.apiToken)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);

        request.apiVersion = this.apiVersion;
        request.enableTelemetry = this.enableTelemetry;

        return request;
    }

    protected createPostRequest<T>(relativeUrl: string, body: {}): IRequest<T> {
        let request = new CustomRequest<T>(this.baseUrl + "/" + relativeUrl, "POST")
            .addHeader(HttpHeader.ACCEPT, Version.AIRTIME_V1.toString())
            .addHeader(HttpHeader.CONTENT_TYPE, MediaType.APPLICATION_JSON.toString())
            .addHeader(HttpHeader.AUTHORIZATION, "Bearer " + this.apiToken)
            .setBody(body)
            .proxy(this.proxyOptions)
            .timeout(this.timeoutInMilliseconds);

        request.apiVersion = this.apiVersion;
        request.enableTelemetry = this.enableTelemetry;

        return request;
    }
}
