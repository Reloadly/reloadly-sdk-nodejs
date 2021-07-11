import { TransactionBalanceInfo } from "./TransactionBalanceInfo";
import { PinDetail } from "./PinDetail";

export class TopupTransaction {

    /**
     * Unique Id of the transaction
     */
    transactionId: bigint;

    /**
     * Unique Id of the transaction from the mobile operator if available
     */
    operatorTransactionId: string;

    /**
     * Unique Id of the transaction provided by the user during at transaction request if any
     */
    customIdentifier: string;

    /**
     * Unique id of the operator the transaction was sent to
     */
    operatorId: bigint;

    /**
     * Topup recipient phone number (with country prefix)
     */
    recipientPhone: string;

    /**
     * Topup recipient email
     */
    recipientEmail: string;

    /**
     * Topup sender phone number that was provided at transaction request if any
     */
    senderPhone: string;

    /**
     * ISO 3166-1 alpha-2 country code of topup destination country. See https://www.iso.org/obp/ui/#search
     */
    countryCode: string;

    /**
     * Name of the mobile operator.
     */
    operatorName: string;

    /**
     * Topup amount that was requested by sender
     */
    requestedAmount: number;

    /**
     * Discount amount that was applied to the request sender's account balance for this transaction
     */
    discount: number;

    /**
     * ISO-4217 3 letter currency code of discount field. See https://www.iso.org/iso-4217-currency-codes.html
     */
    discountCurrencyCode: string;

    /**
     * ISO-4217 3 letter currency code of requestedAmount field. See https://www.iso.org/iso-4217-currency-codes.html
     */
    requestedAmountCurrencyCode: string;

    /**
     * Amount that was delivered in local currency
     */
    deliveredAmount: number;

    /**
     * ISO-4217 3 letter currency code of deliveredAmount field. See https://www.iso.org/iso-4217-currency-codes.html
     */
    deliveredAmountCurrencyCode: string;

    /**
     * Time stamp recorded for this transaction
     */
    transactionDate: Date;

    /**
     * User (you) account balance info after this transaction
     */
    balanceInfo: TransactionBalanceInfo;

    /**
     * PIN detail info for PIN-based transactions
     */
    pinDetail: PinDetail;
}
