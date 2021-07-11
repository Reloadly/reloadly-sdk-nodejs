"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopupRequest = void 0;
class TopupRequest {
    constructor(amount, operatorId, useLocalAmount, senderPhone, customIdentifier) {
        this.amount = amount;
        this.operatorId = operatorId;
        this.useLocalAmount = useLocalAmount;
        this.senderPhone = senderPhone;
        this.customIdentifier = customIdentifier;
    }
}
exports.TopupRequest = TopupRequest;
//# sourceMappingURL=TopupRequest.js.map