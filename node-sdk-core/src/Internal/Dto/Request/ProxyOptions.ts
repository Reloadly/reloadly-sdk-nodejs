import { ProxyOptionsAuth } from "./ProxyOptionsAuth";

export class ProxyOptions {
    public host: string;
    public port: string;
    public protocol?: string;
    public auth?: ProxyOptionsAuth;

    constructor(host: string, port: string, protocol?: string, auth?: ProxyOptionsAuth) {
        this.host = host;
        this.port = port;
        this.protocol = protocol;
        this.auth = auth;
    }

    public axiosOptions() {
        let options = {
            host: this.host,
            port: this.port
        };

        if (this.protocol) options["protocol"] = this.protocol;
        if (this.auth) options["auth"] = {
            username: this.auth.username,
            password: this.auth.password
        };

        return options;
    }
}

