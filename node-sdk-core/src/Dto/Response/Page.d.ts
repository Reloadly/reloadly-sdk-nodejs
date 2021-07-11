export declare class Page<T> {
    content: T[];
    pageable: {};
    totalPages: number;
    number?: number;
    size?: number;
    totalElements?: bigint;
    last?: boolean;
    sort?: {};
    first?: boolean;
    numberOfElements?: number;
}
