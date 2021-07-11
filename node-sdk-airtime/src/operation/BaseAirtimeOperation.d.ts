import { BaseOperation, IRequest, QueryFilter } from "../../../node-sdk-core/src/Core";
export declare abstract class BaseAirtimeOperation extends BaseOperation {
    protected readonly apiVersion: string;
    protected readonly apiToken: string;
    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean);
    protected createGetRequest<T>(relativeUrl: string, filter?: QueryFilter): IRequest<T>;
    protected createPostRequest<T>(relativeUrl: string, body: {}): IRequest<T>;
}
