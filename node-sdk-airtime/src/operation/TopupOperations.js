"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopupOperations = void 0;
const BaseAirtimeOperation_1 = require("./BaseAirtimeOperation");
class TopupOperations extends BaseAirtimeOperation_1.BaseAirtimeOperation {
    constructor(baseUrl, apiToken, apiVersion, enableTelemetry) {
        super(baseUrl, apiToken, apiVersion, enableTelemetry);
    }
    send(request) {
        this.validateTopupRequest(request);
        return this.createPostRequest(TopupOperations.END_POINT, request);
    }
    validateTopupRequest(request) {
        if (!request.amount || request.amount < 0)
            throw new Error("'request.amount' must be greater than 0.");
        if (!request.operatorId || request.operatorId < 0)
            throw new Error("'request.operatorId' must be greater than 0.");
        if ("recipientPhone" in request) {
            this.assertValidPhone(request.recipientPhone, "recipientPhone");
        }
        else if ("recipientEmail" in request) {
            this.assertValidEmail(request.recipientEmail);
        }
    }
    assertValidPhone(phone, fieldName) {
        let messagePrefix1 = "Phone";
        let messagePrefix2 = "Phone number";
        let messagePrefix3 = "Phone country code";
        if (fieldName && fieldName.toLowerCase() == "recipientphone") {
            messagePrefix1 = "Recipient phone";
            messagePrefix2 = "Recipient phone number";
            messagePrefix3 = "Recipient phone country code";
        }
        else if (fieldName && fieldName.toLowerCase() == "senderphone") {
            messagePrefix1 = "Sender phone";
            messagePrefix2 = "Sender phone number";
            messagePrefix3 = "Sender phone country code";
        }
        if (!phone || !phone.number)
            throw new Error("'phone.number' must be provided.");
        const number = phone.number.replace("+", "").replace(" ", "").trim();
        if (!(number.length > 3 && /[0-9]+/.test(number))) {
            throw new Error("'" + messagePrefix2 + "' must contain only numbers and an optional leading '+' sign!");
        }
        if (!phone.countryCode)
            throw new Error(messagePrefix3 + " must be provided.");
    }
    assertValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            throw new Error("Invalid email.");
        }
    }
}
exports.TopupOperations = TopupOperations;
TopupOperations.END_POINT = "topups";
//# sourceMappingURL=TopupOperations.js.map