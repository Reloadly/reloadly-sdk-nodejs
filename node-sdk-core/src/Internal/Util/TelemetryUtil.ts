import { Telemetry } from "../Net/Telemetry";

export class TelemetryUtil {
    static ENV_KEY: string = "env";
    static NAME_KEY: string = "name";
    static VERSION_KEY: string = "api-version";
    static LIBRARY_VERSION_KEY: string = "reloadly-sdk-nodejs";

    static create(apiVersion?: string): Telemetry {
        var sdkVersion = this.getSDKVersion();
        return new Telemetry("reloadly-sdk-nodejs", sdkVersion, apiVersion);
    }

    static httpHeaderValue(telemetry: Telemetry): string {

        if (!telemetry.name) return null;

        let values = {};

        values[this.NAME_KEY] = telemetry.name;
        if (telemetry.apiVersion) values[this.VERSION_KEY] = telemetry.apiVersion;

        var env = {};
        if (telemetry.libraryVersion) env[this.LIBRARY_VERSION_KEY] = telemetry.libraryVersion;
        values[this.ENV_KEY] = env;

        let json: string = JSON.stringify(values);
        return this.base64Encode(json);
    }

    static base64Encode(text: string): string {
        let buff = Buffer.from(text, 'utf8');
        return buff.toString('base64');
    }

    static base64Decode(base64: string): string {
        let buff = Buffer.from(base64, 'base64');
        return buff.toString('utf8');
    }

    static getSDKVersion(): string {
        return require('../../package.json').version;
    }
}
