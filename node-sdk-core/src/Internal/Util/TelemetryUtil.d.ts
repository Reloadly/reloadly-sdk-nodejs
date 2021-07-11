import { Telemetry } from "../Net/Telemetry";
export declare class TelemetryUtil {
    static ENV_KEY: string;
    static NAME_KEY: string;
    static VERSION_KEY: string;
    static LIBRARY_VERSION_KEY: string;
    static create(apiVersion?: string): Telemetry;
    static httpHeaderValue(telemetry: Telemetry): string;
    static base64Encode(text: string): string;
    static base64Decode(base64: string): string;
    static getSDKVersion(): string;
}
