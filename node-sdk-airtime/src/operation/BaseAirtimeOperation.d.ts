import ReloadlyCore = require("@reloadly/reloadly.core");
export declare abstract class BaseAirtimeOperation extends ReloadlyCore.BaseOperation {
    protected readonly apiVersion: string;
    protected readonly apiToken: string;
    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean);
    protected createGetRequest<T>(relativeUrl: string, filter?: ReloadlyCore.QueryFilter): ReloadlyCore.IRequest<T>;
    protected createPostRequest<T>(relativeUrl: string, body: {}): ReloadlyCore.IRequest<T>;
}
