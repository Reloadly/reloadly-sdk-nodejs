import { ProxyOptionsAuth } from "./ProxyOptionsAuth";
export declare class ProxyOptions {
    host: string;
    port: string;
    protocol?: string;
    auth?: ProxyOptionsAuth;
    constructor(host: string, port: string, protocol?: string, auth?: ProxyOptionsAuth);
    axiosOptions(): {
        host: string;
        port: string;
    };
}
