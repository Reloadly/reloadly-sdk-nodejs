import ReloadlyCore = require("@reloadly/reloadly.core");
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { Operator } from "../dto/response/Operator";
import { OperatorFilter } from "../filter/OperatorFilter";
import { OperatorFxRate } from "../dto/response/OperatorFxRate";
export declare class OperatorOperations extends BaseAirtimeOperation {
    static readonly END_POINT = "operators";
    static readonly PATH_SEGMENT_FX_RATE = "fx-rate";
    static readonly PATH_SEGMENT_COUNTRIES = "countries";
    static readonly PATH_SEGMENT_AUTO_DETECT = "auto-detect";
    static readonly PATH_SEGMENT_AUTO_DETECT_PHONE = "phone";
    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean);
    list(filter?: OperatorFilter): ReloadlyCore.IRequest<ReloadlyCore.Page<Operator>>;
    getById(operatorId: bigint, filter?: OperatorFilter): ReloadlyCore.IRequest<Operator>;
    autoDetect(phone: string, countryCode: string, filter?: OperatorFilter): ReloadlyCore.IRequest<Operator>;
    listByCountryCode(countryCode: string, filter?: OperatorFilter): ReloadlyCore.IRequest<Operator[]>;
    calculateFxRate(operatorId: bigint, amount: number): ReloadlyCore.IRequest<OperatorFxRate>;
    private buildListByCountryCodeRequestUrl;
    private buildCalculateFxRateRequestUrl;
    private buildAutoDetectRequestUrl;
    private buildUrl;
    validateOperatorId(operatorId: bigint): void;
    validatePhoneAndCountryCode(phone: string, countryCode: string): void;
}
