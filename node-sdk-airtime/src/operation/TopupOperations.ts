import ReloadlyCore = require("@reloadly/reloadly.core");
import { BaseAirtimeOperation } from "./BaseAirtimeOperation";
import { TopupRequest } from "../dto/request/TopupRequest";
import { PhoneTopupRequest } from "../dto/request/PhoneTopupRequest";
import { EmailTopupRequest } from "../dto/request/EmailTopupRequest";
import { TopupTransaction } from "../dto/response/TopupTransaction";
import { Phone } from "../dto/response/Phone";

export class TopupOperations extends BaseAirtimeOperation {

    static readonly END_POINT = "topups";

    constructor(baseUrl: string, apiToken: string, apiVersion: string, enableTelemetry: boolean) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }

    send(request: TopupRequest): ReloadlyCore.IRequest<TopupTransaction> {
        this.validateTopupRequest(request);
        return this.createPostRequest(TopupOperations.END_POINT, request);
    }

    private validateTopupRequest(request: TopupRequest) {

        if (!request.amount || request.amount < 0) throw new Error("'request.amount' must be greater than 0.");
        if (!request.operatorId || request.operatorId < 0) throw new Error("'request.operatorId' must be greater than 0.");

        if ("recipientPhone" in request) {
            this.assertValidPhone((<PhoneTopupRequest>request).recipientPhone, "recipientPhone");
        } else if ("recipientEmail" in request) {
            this.assertValidEmail((<EmailTopupRequest>request).recipientEmail);
        }
    }

    private assertValidPhone(phone: Phone, fieldName: string) {

        let messagePrefix1 = "Phone";
        let messagePrefix2 = "Phone number";
        let messagePrefix3 = "Phone country code";

        if (fieldName && fieldName.toLowerCase() == "recipientphone") {
            messagePrefix1 = "Recipient phone";
            messagePrefix2 = "Recipient phone number";
            messagePrefix3 = "Recipient phone country code";
        } else if (fieldName && fieldName.toLowerCase() == "senderphone") {
            messagePrefix1 = "Sender phone";
            messagePrefix2 = "Sender phone number";
            messagePrefix3 = "Sender phone country code";
        }

        if (!phone || !phone.number) throw new Error("'phone.number' must be provided.");

        const number = phone.number.replace("+", "").replace(" ", "").trim();
        if (!(number.length > 3 && /[0-9]+/.test(number))) {
            throw new Error("'" + messagePrefix2 + "' must contain only numbers and an optional leading '+' sign!");
        }

        if (!phone.countryCode) throw new Error(messagePrefix3 + " must be provided.");
    }

    private assertValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            throw new Error("Invalid email.");
        }
    }
}
