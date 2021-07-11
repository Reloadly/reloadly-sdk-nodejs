import { SimplifiedOperator } from "./SimplifiedOperator";

export class Discount {
    percentage:number;
    internationalPercentage: number;
    localPercentage: number;
    updatedAt: Date;
    operator: SimplifiedOperator;
}
