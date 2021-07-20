import ReloadlyCore = require("@reloadly/reloadly.core");
export declare class OperatorFilter extends ReloadlyCore.QueryFilter {
    static readonly INCLUDE_PIN = "includePin";
    static readonly INCLUDE_DATA = "includeData";
    static readonly INCLUDE_BUNDLES = "includeBundles";
    static readonly INCLUDE_SUGGESTED_AMOUNTS = "suggestedAmounts";
    static readonly INCLUDE_RANGE_DENOMINATION_TYPE = "includeRange";
    static readonly INCLUDE_FIXED_DENOMINATION_TYPE = "includeFixed";
    static readonly INCLUDE_SUGGESTED_AMOUNTS_MAP = "suggestedAmountsMap";
    OperatorFilter(): void;
    withPage(pageNumber: number, pageSize: number): OperatorFilter;
    /**
     * Whether to include pin-based operators in response
     *
     * @param includePin - Whether to include pin-based operators in response
     * @return - OperatorFilter
     */
    includePin(includePin: boolean): OperatorFilter;
    /**
     * Whether to include data operators in response
     *
     * @param includeData - Whether to include data operators in response
     * @return - OperatorFilter
     */
    includeData(includeData: boolean): OperatorFilter;
    /**
     * Whether to include bundles operators in response
     *
     * @param includeBundles - Whether to include bundles in response
     * @return - OperatorFilter
     */
    includeBundles(includeBundles: boolean): OperatorFilter;
    /**
     * Whether to include suggestedAmount field in response
     *
     * @param includeSuggestedAmounts - Whether to include suggested amounts in response
     * @return - OperatorFilter
     */
    includeSuggestedAmounts(includeSuggestedAmounts: boolean): OperatorFilter;
    /**
     * Whether to include suggestedAmountsMap field in response
     *
     * @param includeSuggestedAmountsMap - Whether to include suggested amounts map in response
     * @return - OperatorFilter
     */
    includeSuggestedAmountsMap(includeSuggestedAmountsMap: boolean): OperatorFilter;
    /**
     * Whether to include operators where denomination type is RANGE in response
     *
     * @param includeRangeDenominationType - Whether to include range denomination type
     * @return - OperatorFilter
     */
    includeRangeDenominationType(includeRangeDenominationType: boolean): OperatorFilter;
    /**
     * Whether to include operators where denomination type is FIXED in response
     *
     * @param includeFixedDenominationType - Whether to include fixed denomination type
     * @return - OperatorFilter
     */
    includeFixedDenominationType(includeFixedDenominationType: boolean): OperatorFilter;
}
