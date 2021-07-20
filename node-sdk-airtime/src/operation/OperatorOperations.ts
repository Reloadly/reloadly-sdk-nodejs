import ReloadlyCore = require("@reloadly/reloadly.core");
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { FxRateRequest } from "../internal/dto/request/FxRateRequest";
import { Operator } from "../dto/response/Operator";
import { OperatorFilter } from "../filter/OperatorFilter";
import { OperatorFxRate } from "../dto/response/OperatorFxRate";

export class OperatorOperations extends BaseAirtimeOperation {

    static readonly END_POINT = "operators";
    static readonly PATH_SEGMENT_FX_RATE = "fx-rate";
    static readonly PATH_SEGMENT_COUNTRIES = "countries";
    static readonly PATH_SEGMENT_AUTO_DETECT = "auto-detect";
    static readonly PATH_SEGMENT_AUTO_DETECT_PHONE = "phone";

    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }

    public list(filter?: OperatorFilter): ReloadlyCore.IRequest<ReloadlyCore.Page<Operator>> {
        var url = this.buildUrl();
        return this.createGetRequest(url, filter);
    };

    public getById(operatorId: bigint, filter?: OperatorFilter): ReloadlyCore.IRequest<Operator> {
        this.validateOperatorId(operatorId);
        var url = this.buildUrl([operatorId.toString()])
        return this.createGetRequest(url, filter);
    }

    public autoDetect(phone: string, countryCode: string, filter?: OperatorFilter): ReloadlyCore.IRequest<Operator> {
        this.validatePhoneAndCountryCode(phone, countryCode);

        var url = this.buildAutoDetectRequestUrl(phone, countryCode);
        return this.createGetRequest(url, filter);
    }

    public listByCountryCode(countryCode: string, filter?: OperatorFilter): ReloadlyCore.IRequest<Operator[]> {
        if (!countryCode) throw new Error("Country Code was not provided.");
        var url = this.buildListByCountryCodeRequestUrl(countryCode);
        return this.createGetRequest(url, filter);
    }

    public calculateFxRate(operatorId: bigint, amount: number): ReloadlyCore.IRequest<OperatorFxRate> {
        this.validateOperatorId(operatorId);
        if (amount < 0) throw new Error("'amount' must be greator than 0.");
        var url = this.buildCalculateFxRateRequestUrl(operatorId);
        var body = new FxRateRequest(amount);
        return this.createPostRequest(url, body);
    }

    private buildListByCountryCodeRequestUrl(countryCode: string): string {
        return this.buildUrl([OperatorOperations.PATH_SEGMENT_COUNTRIES, countryCode]);
    }

    private buildCalculateFxRateRequestUrl(operatorId: bigint): string {
        return this.buildUrl([operatorId.toString(), OperatorOperations.PATH_SEGMENT_FX_RATE]);
    }

    private buildAutoDetectRequestUrl(phone: string, countryCode: string): string {
        phone = phone.trim();

        if (!phone.startsWith("+")) {
            phone = "+" + phone;
        }

        return this.buildUrl(["auto-detect", "phone", phone, "countries", countryCode]);
    }

    private buildUrl(segments?: string[]): string {
        var seg = segments ? segments.join("/") : "";

        var url = OperatorOperations.END_POINT + "/" + seg;

        // replace trailing '/' if any
        url = url.replace(/\/$/, "");

        return url;
    }

    validateOperatorId(operatorId: bigint) {
        if (!operatorId || operatorId < 0) throw new Error("'operatorId' must be greater than 0.");
    }

    validatePhoneAndCountryCode(phone: string, countryCode: string) {
        if (!phone) throw new Error("'phone' was not provided.");
        if (!countryCode) throw new Error("'countryCode' was not provided.");
    }
}
