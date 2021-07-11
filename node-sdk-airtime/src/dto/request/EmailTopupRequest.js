"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTopupRequest = void 0;
const TopupRequest_1 = require("./TopupRequest");
class EmailTopupRequest extends TopupRequest_1.TopupRequest {
    constructor(amount, operatorId, recipientEmail, senderPhone, useLocalAmount, customIdentifier) {
        super(amount, operatorId, useLocalAmount, senderPhone, customIdentifier);
        this.recipientEmail = recipientEmail;
    }
}
exports.EmailTopupRequest = EmailTopupRequest;
//# sourceMappingURL=EmailTopupRequest.js.map