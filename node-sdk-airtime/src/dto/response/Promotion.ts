export class Promotion {

    /**
     * Unique identifier for the given promotion
     */
    id: bigint;

    /**
     * Id of operator to which the promotion applies
     */
    operatorId: bigint;

    /**
     * Title of the promotion
     */
    title: string;

    /**
     * 2nd title for the promotion if any
     */
    title2: string;

    /**
     * Description of the promotion
     */
    description: string;

    /**
     * Date on which the promotion starts
     */
    startDate: Date;

    /**
     * Date on which the promotion ends
     */
    endDate: Date;

    /**
     * Amounts for which the promotion applies
     */
    denominations: string;

    /**
     * Amounts (in destination country currency) for which the promotion applies
     */
    localDenominations: string;
}
