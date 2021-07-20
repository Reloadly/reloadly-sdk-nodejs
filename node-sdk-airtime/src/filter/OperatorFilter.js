"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorFilter = void 0;
const ReloadlyCore = require("@reloadly/reloadly.core");
class OperatorFilter extends ReloadlyCore.QueryFilter {
    OperatorFilter() {
        this.parameters[OperatorFilter.INCLUDE_PIN] = true;
        this.parameters[OperatorFilter.INCLUDE_DATA] = true;
        this.parameters[OperatorFilter.INCLUDE_BUNDLES] = true;
        this.parameters[OperatorFilter.INCLUDE_SUGGESTED_AMOUNTS] = false;
        this.parameters[OperatorFilter.INCLUDE_SUGGESTED_AMOUNTS_MAP] = false;
        this.parameters[OperatorFilter.INCLUDE_RANGE_DENOMINATION_TYPE] = true;
        this.parameters[OperatorFilter.INCLUDE_FIXED_DENOMINATION_TYPE] = true;
    }
    withPage(pageNumber, pageSize) {
        super.withPage(pageNumber, pageSize);
        return this;
    }
    /**
     * Whether to include pin-based operators in response
     *
     * @param includePin - Whether to include pin-based operators in response
     * @return - OperatorFilter
     */
    includePin(includePin) {
        this.parameters[OperatorFilter.INCLUDE_PIN] = includePin;
        return this;
    }
    /**
     * Whether to include data operators in response
     *
     * @param includeData - Whether to include data operators in response
     * @return - OperatorFilter
     */
    includeData(includeData) {
        this.parameters[OperatorFilter.INCLUDE_DATA] = includeData;
        return this;
    }
    /**
     * Whether to include bundles operators in response
     *
     * @param includeBundles - Whether to include bundles in response
     * @return - OperatorFilter
     */
    includeBundles(includeBundles) {
        this.parameters[OperatorFilter.INCLUDE_BUNDLES] = includeBundles;
        return this;
    }
    /**
     * Whether to include suggestedAmount field in response
     *
     * @param includeSuggestedAmounts - Whether to include suggested amounts in response
     * @return - OperatorFilter
     */
    includeSuggestedAmounts(includeSuggestedAmounts) {
        this.parameters[OperatorFilter.INCLUDE_SUGGESTED_AMOUNTS] = includeSuggestedAmounts;
        return this;
    }
    /**
     * Whether to include suggestedAmountsMap field in response
     *
     * @param includeSuggestedAmountsMap - Whether to include suggested amounts map in response
     * @return - OperatorFilter
     */
    includeSuggestedAmountsMap(includeSuggestedAmountsMap) {
        this.parameters[OperatorFilter.INCLUDE_SUGGESTED_AMOUNTS_MAP] = includeSuggestedAmountsMap;
        return this;
    }
    /**
     * Whether to include operators where denomination type is RANGE in response
     *
     * @param includeRangeDenominationType - Whether to include range denomination type
     * @return - OperatorFilter
     */
    includeRangeDenominationType(includeRangeDenominationType) {
        this.parameters[OperatorFilter.INCLUDE_RANGE_DENOMINATION_TYPE] = includeRangeDenominationType;
        return this;
    }
    /**
     * Whether to include operators where denomination type is FIXED in response
     *
     * @param includeFixedDenominationType - Whether to include fixed denomination type
     * @return - OperatorFilter
     */
    includeFixedDenominationType(includeFixedDenominationType) {
        this.parameters[OperatorFilter.INCLUDE_FIXED_DENOMINATION_TYPE] = includeFixedDenominationType;
        return this;
    }
}
exports.OperatorFilter = OperatorFilter;
OperatorFilter.INCLUDE_PIN = "includePin";
OperatorFilter.INCLUDE_DATA = "includeData";
OperatorFilter.INCLUDE_BUNDLES = "includeBundles";
OperatorFilter.INCLUDE_SUGGESTED_AMOUNTS = "suggestedAmounts";
OperatorFilter.INCLUDE_RANGE_DENOMINATION_TYPE = "includeRange";
OperatorFilter.INCLUDE_FIXED_DENOMINATION_TYPE = "includeFixed";
OperatorFilter.INCLUDE_SUGGESTED_AMOUNTS_MAP = "suggestedAmountsMap";
//# sourceMappingURL=OperatorFilter.js.map