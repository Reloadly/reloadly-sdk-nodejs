"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryOperations = void 0;
const BaseAirtimeOperation_1 = require("./BaseAirtimeOperation");
class CountryOperations extends BaseAirtimeOperation_1.BaseAirtimeOperation {
    constructor(baseUrl, apiToken, apiVersion, enableTelemetry) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }
    list() {
        return this.createGetRequest(CountryOperations.END_POINT);
    }
    getByCode(countryCode) {
        if (!countryCode)
            throw new Error("'countryCode' must be provided.");
        return this.createGetRequest(CountryOperations.END_POINT + "/" + countryCode);
    }
}
exports.CountryOperations = CountryOperations;
CountryOperations.END_POINT = "countries";
//# sourceMappingURL=CountryOperations.js.map