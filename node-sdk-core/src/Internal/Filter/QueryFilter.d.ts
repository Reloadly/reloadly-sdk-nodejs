import { BaseFilter } from "./BaseFilter";
export declare class QueryFilter extends BaseFilter {
    parameters: {};
    /**
     * Filter by page
     *
     * @param pageNumber the page number to retrieve.
     * @param pageSize   the amount of items per page to retrieve.
     * @return this filter instance
     */
    withPage(pageNumber: number, pageSize: number): QueryFilter;
}
