import { Phone } from "../response/Phone";
export declare abstract class TopupRequest {
    /**
     * Amount (in sender's currency) to credit recipient phone for
     */
    amount: number;
    /**
     * Unique identifier of the destination mobile operator id
     */
    operatorId: number;
    /**
     * Phone number of user requesting to credit the recipient phone, this field is optional.
     */
    senderPhone: Phone;
    /**
     * Indicates whether topup amount is a local amount (as in the same currency as the destination country)
     */
    useLocalAmount: boolean;
    /**
     * This field can be used to record any kind of info when performing the transaction.
     * Maximum length allowed for field customIdentifier is 150 characters, this field is optional.
     */
    customIdentifier: string;
    constructor(amount: number, operatorId: number, useLocalAmount: boolean, senderPhone: Phone, customIdentifier?: string);
}
