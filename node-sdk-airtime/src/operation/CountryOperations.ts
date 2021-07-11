import {
    IRequest
} from "../../../node-sdk-core/src/Core";

import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { Country } from "../dto/response/Country";

export class CountryOperations extends BaseAirtimeOperation {

    static readonly END_POINT = "countries";

    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }

    public list(): IRequest<Country[]> {
        return this.createGetRequest(CountryOperations.END_POINT);
    }

    public getByCode(countryCode: string): IRequest<Country> {
        if (!countryCode) throw new Error("'countryCode' must be provided.");

        return this.createGetRequest(CountryOperations.END_POINT + "/" + countryCode);
    }
}
