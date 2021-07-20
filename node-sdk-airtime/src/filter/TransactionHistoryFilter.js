"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHistoryFilter = void 0;
const ReloadlyCore = require("@reloadly/reloadly.core");
class TransactionHistoryFilter extends ReloadlyCore.QueryFilter {
    withPage(pageNumber, pageSize) {
        super.withPage(pageNumber, pageSize);
        return this;
    }
    /**
     * @param operatorId - Operator id to filter by
     * @return - TransactionHistoryFilter
     */
    operatorId(operatorId) {
        if (!operatorId || operatorId <= 0)
            throw new Error("'operatorId' must be greater than 0.");
        this.parameters[TransactionHistoryFilter.OPERATOR_ID] = operatorId;
        return this;
    }
    /**
     * @param countryCode - Country code to filter by
     * @return - TransactionHistoryFilter
     */
    countryCode(countryCode) {
        if (!countryCode)
            throw new Error("'countryCode' mustbe provided.");
        this.parameters[TransactionHistoryFilter.COUNTRY_CODE] = countryCode;
        return this;
    }
    /**
     * @param operatorName - Operator name to filter by
     * @return - TransactionHistoryFilter
     */
    operatorName(operatorName) {
        if (!operatorName)
            throw new Error("'operatorName' mustbe provided.");
        this.parameters[TransactionHistoryFilter.OPERATOR_NAME] = operatorName;
        return this;
    }
    /**
     * @param customIdentifier - Custom identifier to filter by
     * @return - TransactionHistoryFilter
     */
    customIdentifier(customIdentifier) {
        if (!customIdentifier)
            throw new Error("'customIdentifier' mustbe provided.");
        this.parameters[TransactionHistoryFilter.CUSTOM_IDENTIFIER] = customIdentifier;
        return this;
    }
    /**
     * @param startDate - Date range start date to filter by
     * @return - TransactionHistoryFilter
     */
    withStartDate(startDate) {
        if (!startDate)
            throw new Error("'startDate' must be provided.");
        this.startDate = startDate;
        this.parameters[TransactionHistoryFilter.START_DATE] =
            this.formatDate(startDate);
        return this;
    }
    /**
     * @param endDate - Date range end date to filter by
     * @return - TransactionHistoryFilter
     */
    withEndDate(endDate) {
        if (!endDate)
            throw new Error("'endDate' must be provided.");
        this.endDate = endDate;
        this.parameters[TransactionHistoryFilter.END_DATE] = this.formatDate(endDate);
        return this;
    }
    /**
     * @description Formats a date in "yyyy-mm-dd hh:mm:ss".
     */
    formatDate(d) {
        return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " +
            d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }
}
exports.TransactionHistoryFilter = TransactionHistoryFilter;
TransactionHistoryFilter.END_DATE = "endDate";
TransactionHistoryFilter.START_DATE = "startDate";
TransactionHistoryFilter.OPERATOR_ID = "operatorId";
TransactionHistoryFilter.COUNTRY_CODE = "countryCode";
TransactionHistoryFilter.OPERATOR_NAME = "operatorName";
TransactionHistoryFilter.CUSTOM_IDENTIFIER = "customIdentifier";
//# sourceMappingURL=TransactionHistoryFilter.js.map