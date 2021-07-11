"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorOperations = void 0;
const BaseAirtimeOperation_1 = require("./BaseAirtimeOperation");
const FxRateRequest_1 = require("../internal/dto/request/FxRateRequest");
class OperatorOperations extends BaseAirtimeOperation_1.BaseAirtimeOperation {
    constructor(baseUrl, apiToken, apiVersion, enableTelemetry) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }
    list(filter) {
        var url = this.buildUrl();
        return this.createGetRequest(url, filter);
    }
    ;
    getById(operatorId, filter) {
        this.validateOperatorId(operatorId);
        var url = this.buildUrl([operatorId.toString()]);
        return this.createGetRequest(url, filter);
    }
    autoDetect(phone, countryCode, filter) {
        this.validatePhoneAndCountryCode(phone, countryCode);
        var url = this.buildAutoDetectRequestUrl(phone, countryCode);
        return this.createGetRequest(url, filter);
    }
    listByCountryCode(countryCode, filter) {
        if (!countryCode)
            throw new Error("Country Code was not provided.");
        var url = this.buildListByCountryCodeRequestUrl(countryCode);
        return this.createGetRequest(url, filter);
    }
    calculateFxRate(operatorId, amount) {
        this.validateOperatorId(operatorId);
        if (amount < 0)
            throw new Error("'amount' must be greator than 0.");
        var url = this.buildCalculateFxRateRequestUrl(operatorId);
        var body = new FxRateRequest_1.FxRateRequest(amount);
        return this.createPostRequest(url, body);
    }
    buildListByCountryCodeRequestUrl(countryCode) {
        return this.buildUrl([OperatorOperations.PATH_SEGMENT_COUNTRIES, countryCode]);
    }
    buildCalculateFxRateRequestUrl(operatorId) {
        return this.buildUrl([operatorId.toString(), OperatorOperations.PATH_SEGMENT_FX_RATE]);
    }
    buildAutoDetectRequestUrl(phone, countryCode) {
        phone = phone.trim();
        if (!phone.startsWith("+")) {
            phone = "+" + phone;
        }
        return this.buildUrl(["auto-detect", "phone", phone, "countries", countryCode]);
    }
    buildUrl(segments) {
        var seg = segments ? segments.join("/") : "";
        var url = OperatorOperations.END_POINT + "/" + seg;
        // replace trailing '/' if any
        url = url.replace(/\/$/, "");
        return url;
    }
    validateOperatorId(operatorId) {
        if (!operatorId || operatorId < 0)
            throw new Error("'operatorId' must be greater than 0.");
    }
    validatePhoneAndCountryCode(phone, countryCode) {
        if (!phone)
            throw new Error("'phone' was not provided.");
        if (!countryCode)
            throw new Error("'countryCode' was not provided.");
    }
}
exports.OperatorOperations = OperatorOperations;
OperatorOperations.END_POINT = "operators";
OperatorOperations.PATH_SEGMENT_FX_RATE = "fx-rate";
OperatorOperations.PATH_SEGMENT_COUNTRIES = "countries";
OperatorOperations.PATH_SEGMENT_AUTO_DETECT = "auto-detect";
OperatorOperations.PATH_SEGMENT_AUTO_DETECT_PHONE = "phone";
//# sourceMappingURL=OperatorOperations.js.map