import ReloadlyCore = require("@reloadly/reloadly.core");

export class TransactionHistoryFilter extends ReloadlyCore.QueryFilter {

    static readonly END_DATE = "endDate";
    static readonly START_DATE = "startDate";
    static readonly OPERATOR_ID = "operatorId";
    static readonly COUNTRY_CODE = "countryCode";
    static readonly OPERATOR_NAME = "operatorName";
    static readonly CUSTOM_IDENTIFIER = "customIdentifier";

    startDate?: Date;
    endDate?: Date;

    public withPage(pageNumber: number, pageSize: number): TransactionHistoryFilter {
        super.withPage(pageNumber, pageSize);
        return this;
    }

    /**
     * @param operatorId - Operator id to filter by
     * @return - TransactionHistoryFilter
     */
    public operatorId(operatorId: bigint): TransactionHistoryFilter {
        if (!operatorId || operatorId <= 0) throw new Error("'operatorId' must be greater than 0.");
        this.parameters[TransactionHistoryFilter.OPERATOR_ID] = operatorId;
        return this;
    }

    /**
     * @param countryCode - Country code to filter by
     * @return - TransactionHistoryFilter
     */
    public countryCode(countryCode: string): TransactionHistoryFilter {
        if (!countryCode) throw new Error("'countryCode' mustbe provided.");
        this.parameters[TransactionHistoryFilter.COUNTRY_CODE] = countryCode;
        return this;
    }

    /**
     * @param operatorName - Operator name to filter by
     * @return - TransactionHistoryFilter
     */
    public operatorName(operatorName: string): TransactionHistoryFilter {
        if (!operatorName) throw new Error("'operatorName' mustbe provided.");
        this.parameters[TransactionHistoryFilter.OPERATOR_NAME] = operatorName;
        return this;
    }

    /**
     * @param customIdentifier - Custom identifier to filter by
     * @return - TransactionHistoryFilter
     */
    public customIdentifier(customIdentifier: string): TransactionHistoryFilter {
        if (!customIdentifier) throw new Error("'customIdentifier' mustbe provided.");
        this.parameters[TransactionHistoryFilter.CUSTOM_IDENTIFIER] = customIdentifier;
        return this;
    }

    /**
     * @param startDate - Date range start date to filter by
     * @return - TransactionHistoryFilter
     */
    public withStartDate(startDate: Date): TransactionHistoryFilter {
        if (!startDate) throw new Error("'startDate' must be provided.");
        this.startDate = startDate;
        this.parameters[TransactionHistoryFilter.START_DATE] =
            this.formatDate(startDate);
        return this;
    }

    /**
     * @param endDate - Date range end date to filter by
     * @return - TransactionHistoryFilter
     */
    public withEndDate(endDate: Date): TransactionHistoryFilter {
        if (!endDate) throw new Error("'endDate' must be provided.");
        this.endDate = endDate;
        this.parameters[TransactionHistoryFilter.END_DATE] = this.formatDate(endDate);
        return this;
    }

    /**
     * @description Formats a date in "yyyy-mm-dd hh:mm:ss".
     */
    private formatDate(d: Date): string {
        return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " +
            d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }
}
