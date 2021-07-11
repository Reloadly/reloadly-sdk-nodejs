import { BaseRequest } from "./BaseRequest";
import { ICustomizableRequest } from "./ICustomizableRequest";

export class CustomRequest<T> extends BaseRequest<T> implements ICustomizableRequest<T> {

    url: string;
    method: string;
    headers: {};
    body?: {};


    constructor(
        url, method = "GET", headers = {}, body: {} = null) {

        super();
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.body = body;
    }

    createRequest(): { method, url, headers, body?} {
        return {
            method: this.method,
            url: this.url,
            headers: this.headers,
            body: this.body
        };
    }

    addHeader(name: string, value: string): CustomRequest<T> {
        this.headers[name] = value;
        return this;
    }

    setBody(value: {}): CustomRequest<T> {
        this.body = value;
        return this;
    }

    protected createBody(): {} {

        if (this.body) {
            return this.body;
        }

        return null;
    }
}
