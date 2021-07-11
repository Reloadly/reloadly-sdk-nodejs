import { IRequest } from "../../../node-sdk-core/src/Core";
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { Country } from "../dto/response/Country";
export declare class CountryOperations extends BaseAirtimeOperation {
    static readonly END_POINT = "countries";
    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean);
    list(): IRequest<Country[]>;
    getByCode(countryCode: string): IRequest<Country>;
}
