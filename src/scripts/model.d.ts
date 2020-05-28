export interface Loading {
    show?: boolean;
    text?: string;
}
export interface Paging {
    total?: number;
    index?: number;
    count?: number;
    page?: number;
    list?: Array<any>;

}