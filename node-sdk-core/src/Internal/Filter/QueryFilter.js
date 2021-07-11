"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFilter = void 0;
const BaseFilter_1 = require("./BaseFilter");
class QueryFilter extends BaseFilter_1.BaseFilter {
    /**
     * Filter by page
     *
     * @param pageNumber the page number to retrieve.
     * @param pageSize   the amount of items per page to retrieve.
     * @return this filter instance
     */
    withPage(pageNumber, pageSize) {
        if (pageNumber <= 0) {
            throw new RangeError("Filter page number must greater than zero");
        }
        if (pageSize <= 0) {
            throw new RangeError("Filter page size must greater than zero");
        }
        this.parameters["page"] = pageNumber;
        this.parameters["size"] = pageSize;
        return this;
    }
}
exports.QueryFilter = QueryFilter;
//# sourceMappingURL=QueryFilter.js.map