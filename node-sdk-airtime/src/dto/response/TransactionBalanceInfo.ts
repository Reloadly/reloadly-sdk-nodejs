export class TransactionBalanceInfo {

    /**
     * Account balance prior to the transaction
     */
    oldBalance: number;

    /**
     * Current account balance amount
     */
    newBalance: number;

    /**
     * Account ISO-4217 3 letter currency code. See https://www.iso.org/iso-4217-currency-codes.html.
     * Example : USD
     */
    currencyCode: string;

    /**
     * Account currency name for the given currency code, example "United States Dollar"
     */
    currencyName: string;

    /**
     * Account balance last updated date
     */
    updatedAt: Date;
}
