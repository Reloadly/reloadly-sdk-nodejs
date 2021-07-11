export declare class Telemetry {
    static readonly ENV_KEY = "env";
    static readonly NAME_KEY = "name";
    static readonly VERSION_KEY = "api-version";
    static readonly HEADER_NAME = "Reloadly-Client";
    static readonly LIBRARY_VERSION_KEY = "reloadly-sdk-nodejs";
    name: string;
    value: string;
    apiVersion: string;
    libraryVersion: string;
    constructor(name: string, libraryVersion?: string, apiVersion?: string);
}
