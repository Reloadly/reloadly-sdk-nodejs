import { BaseRequest } from "./BaseRequest";
import { ICustomizableRequest } from "./ICustomizableRequest";
export declare class CustomRequest<T> extends BaseRequest<T> implements ICustomizableRequest<T> {
    url: string;
    method: string;
    headers: {};
    body?: {};
    constructor(url: any, method?: string, headers?: {}, body?: {});
    createRequest(): {
        method: any;
        url: any;
        headers: any;
        body?: any;
    };
    addHeader(name: string, value: string): CustomRequest<T>;
    setBody(value: {}): CustomRequest<T>;
    protected createBody(): {};
}
