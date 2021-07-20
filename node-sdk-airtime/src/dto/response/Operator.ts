import { DenominationType } from "../../enums/DenominationType";
import { FxRate } from "../../dto/response/FxRate";
import { Promotion } from "../../dto/response/Promotion";
import { SimplifiedCountry } from "./SimplifiedCountry";

export class Operator {

    /**
     * Unique id assign to each operator.
     */
    id: bigint;

    /**
     * Name of the mobile operator.
     */
    name: string;

    /**
     * Whether the mobile operator is a prepaid data bundle. Prepaid bundles are a mixture of calls, data,
     * SMS and social media access which the users can purchase other than airtime credits
     */
    bundle: boolean;

    /**
     * Whether the operator is a prepaid data only
     */
    data: boolean;

    /**
     * Whether the operator is pin based
     */
    pin: boolean;

    /**
     * Whether the operator supports local amounts
     */
    supportsLocalAmounts: boolean;

    /**
     * Operator amount denomination type
     */
    denominationType: DenominationType;

    /**
     * ISO-3 currency code of user account
     */
    senderCurrencyCode: string;

    /**
     * User account currency symbol
     */
    senderCurrencySymbol: string;

    /**
     * ISO-3 currency code of operator destination country
     */
    destinationCurrencyCode: string;

    /**
     * Destination currency symbol
     */
    destinationCurrencySymbol: string;

    /**
     * International discount assigned for this operator
     */
    internationalDiscount: number;

    /**
     * Local discount assigned for this operator
     */
    localDiscount: number;

    /**
     * Most popular international amount for this operator
     */
    mostPopularAmount: number;

    /**
     * Most popular local amount for this operator
     */
    mostPopularLocalAmount: number;

    /**
     * Operator's country
     */
    country: SimplifiedCountry;

    /**
     * Current fx rate for this operator
     */
    private fx: FxRate;

    /**
     * Suggested whole amounts when denomination type is 'FIXED'
     */
    suggestedAmounts: number;

    /**
     * Suggested amounts map containing (amount in sender currency, amount in recipient currency)
     * when denomination type is 'FIXED'
     */
    suggestedAmountsMap: {};

    /**
     * Minimum amount when denomination type is 'RANGE' will be empty/null for 'FIXED' denomination type
     */
    minAmount: number;

    /**
     * Maximum amount when denomination type is 'RANGE', will be empty/null for 'FIXED' denomination type
     */
    maxAmount: number;

    /**
     * Minimum local amount when denomination type is 'RANGE', will be empty/null for 'FIXED' denomination type
     */
    localMinAmount: number;

    /**
     * Maximum local amount when denomination type is 'RANGE', will be empty/null for 'FIXED' denomination
     */
    localMaxAmount: number;

    /**
     * Available operator amounts when denomination type is 'FIXED', will be empty/null for 'RANGE' denomination type
     */
    private fixedAmounts: number[];

    /**
     * Available operator local amounts when denomination type is 'FIXED', will be empty/null for 'RANGE' denomination type
     */
    private localFixedAmounts: number[];

    /**
     * International fixed amounts descriptions
     */
    private fixedAmountsDescriptions: {};

    /**
     * Local fixed amounts descriptions
     */
    private localFixedAmountsDescriptions: {};

    /**
     * Logo url of the mobile operator
     */
    logoUrls: string[];

    /**
     * Available promotions for this operator if any
     */
    private promotions: Promotion[];
}
