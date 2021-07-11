import { IRequest } from "../../../node-sdk-core/src/Core";
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { TopupRequest } from "../dto/request/TopupRequest";
import { TopupTransaction } from "../dto/response/TopupTransaction";
export declare class TopupOperations extends BaseAirtimeOperation {
    static readonly END_POINT = "topups";
    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean);
    send(request: TopupRequest): IRequest<TopupTransaction>;
    private validateTopupRequest;
    private assertValidPhone;
    private assertValidEmail;
}
