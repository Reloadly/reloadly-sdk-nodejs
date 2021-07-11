import { TopupRequest } from "./TopupRequest";
import { Phone } from "../response/Phone";

export class EmailTopupRequest extends TopupRequest {

    /**
     * Destination recipient email address to be credited
     */
    recipientEmail: string;

    constructor(amount: number, operatorId: number, recipientEmail: string,
        senderPhone: Phone, useLocalAmount: boolean, customIdentifier: string) {

        super(amount, operatorId, useLocalAmount, senderPhone, customIdentifier);
        this.recipientEmail = recipientEmail;
    }
}
