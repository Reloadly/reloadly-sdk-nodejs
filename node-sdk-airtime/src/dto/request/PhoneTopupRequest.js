"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneTopupRequest = void 0;
const TopupRequest_1 = require("./TopupRequest");
class PhoneTopupRequest extends TopupRequest_1.TopupRequest {
    constructor(amount, operatorId, recipientPhone, useLocalAmount, senderPhone, customIdentifier) {
        super(amount, operatorId, useLocalAmount, senderPhone, customIdentifier);
        this.recipientPhone = recipientPhone;
    }
}
exports.PhoneTopupRequest = PhoneTopupRequest;
//# sourceMappingURL=PhoneTopupRequest.js.map