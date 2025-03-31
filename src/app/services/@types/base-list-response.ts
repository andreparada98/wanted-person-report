export interface BaseListResponse<T> {
    totalPages: number;
    totalElements: number;
    pageable: Pageable;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    size: number;
    content: T[];
    number: number;
    sort: Sort;
    empty: boolean;
}
export interface Pageable {
    pageNumber: number;
    paged: boolean;
    pageSize: number;
    unpaged: boolean;
    offset: number;
    sort: Sort;
}

export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}
