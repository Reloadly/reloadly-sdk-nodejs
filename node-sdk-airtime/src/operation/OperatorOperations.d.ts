import { IRequest, Page } from "../../../node-sdk-core/src/Core";
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
    list(filter?: OperatorFilter): IRequest<Page<Operator>>;
    getById(operatorId: bigint, filter?: OperatorFilter): IRequest<Operator>;
    autoDetect(phone: string, countryCode: string, filter?: OperatorFilter): IRequest<Operator>;
    listByCountryCode(countryCode: string, filter?: OperatorFilter): IRequest<Operator[]>;
    calculateFxRate(operatorId: bigint, amount: number): IRequest<OperatorFxRate>;
    private buildListByCountryCodeRequestUrl;
    private buildCalculateFxRateRequestUrl;
    private buildAutoDetectRequestUrl;
    private buildUrl;
    validateOperatorId(operatorId: bigint): void;
    validatePhoneAndCountryCode(phone: string, countryCode: string): void;
}
