"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telemetry = void 0;
class Telemetry {
    constructor(name, libraryVersion, apiVersion) {
        this.name = name;
        this.apiVersion = apiVersion;
        this.libraryVersion = libraryVersion;
    }
}
exports.Telemetry = Telemetry;
Telemetry.ENV_KEY = "env";
Telemetry.NAME_KEY = "name";
Telemetry.VERSION_KEY = "api-version";
Telemetry.HEADER_NAME = "Reloadly-Client";
Telemetry.LIBRARY_VERSION_KEY = "reloadly-sdk-nodejs";
//# sourceMappingURL=Telemetry.js.map