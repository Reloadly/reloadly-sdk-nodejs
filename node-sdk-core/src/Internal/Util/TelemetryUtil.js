"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelemetryUtil = void 0;
const Telemetry_1 = require("../Net/Telemetry");
class TelemetryUtil {
    static create(apiVersion) {
        var sdkVersion = this.getSDKVersion();
        return new Telemetry_1.Telemetry("reloadly-sdk-nodejs", sdkVersion, apiVersion);
    }
    static httpHeaderValue(telemetry) {
        if (!telemetry.name)
            return null;
        let values = {};
        values[this.NAME_KEY] = telemetry.name;
        if (telemetry.apiVersion)
            values[this.VERSION_KEY] = telemetry.apiVersion;
        var env = {};
        if (telemetry.libraryVersion)
            env[this.LIBRARY_VERSION_KEY] = telemetry.libraryVersion;
        values[this.ENV_KEY] = env;
        let json = JSON.stringify(values);
        return this.base64Encode(json);
    }
    static base64Encode(text) {
        let buff = Buffer.from(text, 'utf8');
        return buff.toString('base64');
    }
    static base64Decode(base64) {
        let buff = Buffer.from(base64, 'base64');
        return buff.toString('utf8');
    }
    static getSDKVersion() {
        return require('../../package.json').version;
    }
}
exports.TelemetryUtil = TelemetryUtil;
TelemetryUtil.ENV_KEY = "env";
TelemetryUtil.NAME_KEY = "name";
TelemetryUtil.VERSION_KEY = "api-version";
TelemetryUtil.LIBRARY_VERSION_KEY = "reloadly-sdk-nodejs";
//# sourceMappingURL=TelemetryUtil.js.map