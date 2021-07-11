"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyOptions = void 0;
class ProxyOptions {
    constructor(host, port, protocol, auth) {
        this.host = host;
        this.port = port;
        this.protocol = protocol;
        this.auth = auth;
    }
    axiosOptions() {
        let options = {
            host: this.host,
            port: this.port
        };
        if (this.protocol)
            options["protocol"] = this.protocol;
        if (this.auth)
            options["auth"] = {
                username: this.auth.username,
                password: this.auth.password
            };
        return options;
    }
}
exports.ProxyOptions = ProxyOptions;
//# sourceMappingURL=ProxyOptions.js.map