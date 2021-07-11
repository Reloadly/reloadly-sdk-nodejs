import { TopupRequest } from "./TopupRequest";
import { Phone } from "../response/Phone";

export class PhoneTopupRequest extends TopupRequest {

    /**
     * Destination recipient phone number (with country prefix) to be credited, example +50936377111
     */
    recipientPhone: Phone;

    constructor(amount: number, operatorId: number,
        recipientPhone: Phone, useLocalAmount: boolean, senderPhone: Phone, customIdentifier?: string) {

        super(amount, operatorId, useLocalAmount, senderPhone, customIdentifier);
        this.recipientPhone = recipientPhone;
    }
}
