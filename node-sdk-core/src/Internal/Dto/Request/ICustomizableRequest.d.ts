import { IRequest } from "./Interfaces/IRequest";
export interface ICustomizableRequest<T> extends IRequest<T> {
    addHeader(name: string, value: string): ICustomizableRequest<T>;
    setBody(body: {}): ICustomizableRequest<T>;
}
