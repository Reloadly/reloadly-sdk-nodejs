import ReloadlyCore = require("@reloadly/reloadly.core");
export declare class TransactionHistoryFilter extends ReloadlyCore.QueryFilter {
    static readonly END_DATE = "endDate";
    static readonly START_DATE = "startDate";
    static readonly OPERATOR_ID = "operatorId";
    static readonly COUNTRY_CODE = "countryCode";
    static readonly OPERATOR_NAME = "operatorName";
    static readonly CUSTOM_IDENTIFIER = "customIdentifier";
    startDate?: Date;
    endDate?: Date;
    withPage(pageNumber: number, pageSize: number): TransactionHistoryFilter;
    /**
     * @param operatorId - Operator id to filter by
     * @return - TransactionHistoryFilter
     */
    operatorId(operatorId: bigint): TransactionHistoryFilter;
    /**
     * @param countryCode - Country code to filter by
     * @return - TransactionHistoryFilter
     */
    countryCode(countryCode: string): TransactionHistoryFilter;
    /**
     * @param operatorName - Operator name to filter by
     * @return - TransactionHistoryFilter
     */
    operatorName(operatorName: string): TransactionHistoryFilter;
    /**
     * @param customIdentifier - Custom identifier to filter by
     * @return - TransactionHistoryFilter
     */
    customIdentifier(customIdentifier: string): TransactionHistoryFilter;
    /**
     * @param startDate - Date range start date to filter by
     * @return - TransactionHistoryFilter
     */
    withStartDate(startDate: Date): TransactionHistoryFilter;
    /**
     * @param endDate - Date range end date to filter by
     * @return - TransactionHistoryFilter
     */
    withEndDate(endDate: Date): TransactionHistoryFilter;
    /**
     * @description Formats a date in "yyyy-mm-dd hh:mm:ss".
     */
    private formatDate;
}
