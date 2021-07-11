import { BaseFilter } from "./BaseFilter";

export class QueryFilter extends BaseFilter {

    parameters: {};

    /**
     * Filter by page
     *
     * @param pageNumber the page number to retrieve.
     * @param pageSize   the amount of items per page to retrieve.
     * @return this filter instance
     */
    withPage(pageNumber: number, pageSize: number): QueryFilter {

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
