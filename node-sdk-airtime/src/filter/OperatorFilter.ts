import ReloadlyCore = require("@reloadly/reloadly.core");

export class OperatorFilter extends ReloadlyCore.QueryFilter {

    static readonly INCLUDE_PIN = "includePin";
    static readonly INCLUDE_DATA = "includeData";
    static readonly INCLUDE_BUNDLES = "includeBundles";
    static readonly INCLUDE_SUGGESTED_AMOUNTS = "suggestedAmounts";
    static readonly INCLUDE_RANGE_DENOMINATION_TYPE = "includeRange";
    static readonly INCLUDE_FIXED_DENOMINATION_TYPE = "includeFixed";
    static readonly INCLUDE_SUGGESTED_AMOUNTS_MAP = "suggestedAmountsMap";

    public OperatorFilter() {
        this.parameters[OperatorFilter.INCLUDE_PIN] = true;
        this.parameters[OperatorFilter.INCLUDE_DATA] = true;
        this.parameters[OperatorFilter.INCLUDE_BUNDLES] = true;
        this.parameters[OperatorFilter.INCLUDE_SUGGESTED_AMOUNTS] = false;
        this.parameters[OperatorFilter.INCLUDE_SUGGESTED_AMOUNTS_MAP] = false;
        this.parameters[OperatorFilter.INCLUDE_RANGE_DENOMINATION_TYPE] = true;
        this.parameters[OperatorFilter.INCLUDE_FIXED_DENOMINATION_TYPE] = true;
    }

    withPage(pageNumber: number, pageSize: number): OperatorFilter {
        super.withPage(pageNumber, pageSize);
        return this;
    }

    /**
     * Whether to include pin-based operators in response
     *
     * @param includePin - Whether to include pin-based operators in response
     * @return - OperatorFilter
     */
    includePin(includePin: boolean): OperatorFilter{
        this.parameters[OperatorFilter.INCLUDE_PIN] = includePin;
        return this;
    }

    /**
     * Whether to include data operators in response
     *
     * @param includeData - Whether to include data operators in response
     * @return - OperatorFilter
     */
    public includeData(includeData: boolean): OperatorFilter {
        this.parameters[OperatorFilter.INCLUDE_DATA] = includeData;
        return this;
    }

    /**
     * Whether to include bundles operators in response
     *
     * @param includeBundles - Whether to include bundles in response
     * @return - OperatorFilter
     */
    public includeBundles(includeBundles: boolean): OperatorFilter {
        this.parameters[OperatorFilter.INCLUDE_BUNDLES] = includeBundles;
        return this;
    }

    /**
     * Whether to include suggestedAmount field in response
     *
     * @param includeSuggestedAmounts - Whether to include suggested amounts in response
     * @return - OperatorFilter
     */
    public includeSuggestedAmounts(includeSuggestedAmounts: boolean): OperatorFilter {
        this.parameters[OperatorFilter.INCLUDE_SUGGESTED_AMOUNTS] = includeSuggestedAmounts;
        return this;
    }

    /**
     * Whether to include suggestedAmountsMap field in response
     *
     * @param includeSuggestedAmountsMap - Whether to include suggested amounts map in response
     * @return - OperatorFilter
     */
    public includeSuggestedAmountsMap(includeSuggestedAmountsMap: boolean): OperatorFilter {
        this.parameters[OperatorFilter.INCLUDE_SUGGESTED_AMOUNTS_MAP] = includeSuggestedAmountsMap;
        return this;
    }

    /**
     * Whether to include operators where denomination type is RANGE in response
     *
     * @param includeRangeDenominationType - Whether to include range denomination type
     * @return - OperatorFilter
     */
    public includeRangeDenominationType(includeRangeDenominationType: boolean): OperatorFilter {
        this.parameters[OperatorFilter.INCLUDE_RANGE_DENOMINATION_TYPE] = includeRangeDenominationType;
        return this;
    }

    /**
     * Whether to include operators where denomination type is FIXED in response
     *
     * @param includeFixedDenominationType - Whether to include fixed denomination type
     * @return - OperatorFilter
     */
    public includeFixedDenominationType(includeFixedDenominationType: boolean): OperatorFilter {
        this.parameters[OperatorFilter.INCLUDE_FIXED_DENOMINATION_TYPE] = includeFixedDenominationType;
        return this;
    }
}
