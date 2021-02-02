
export type ICrudItemParams<T> = { [J in keyof Partial<T>]: any };


export interface IQueryPopulateOptions {
    path: string;
    select?: any;
    match?: any;
    model?: string;
    options?: any;
    populate?: IQueryPopulateOptions | IQueryPopulateOptions[];
}


export interface IGetAllParams<T> {
    page?: number,
    pageSize?: number,
    sort?: string  | ICrudItemParams<T>,
    filter?: string | ICrudItemParams<T>,
    fields?: string | ICrudItemParams<T>,
    lean?: boolean
    populate?: string | IQueryPopulateOptions | IQueryPopulateOptions[];
}

export type IFindOneParams<T> = Pick<IGetAllParams<T>, "filter" | "fields" | "populate" | "lean">