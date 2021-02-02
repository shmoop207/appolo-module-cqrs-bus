"use strict";
import {BaseCommand, BaseQuery, QueryBus} from "../../../../../"
import {lazy} from "@appolo/inject"
import {ICrudItemParams, IGetAllParams, IQueryPopulateOptions} from "../../interfaces/IGetAllParams";

export type CrudItemParams<T> = { [J in keyof Partial<T>]: any };


export abstract class BaseGetAllDataQuery<T> extends BaseQuery<IGetAllParams<T>, { results: T [], count: number }> {

    constructor(params: IGetAllParams<T> = {}) {
        super(params);
    }

    public sort(key: keyof Partial<T>, value?: any): this {
        return this.sorts({[key]: value ?? 1} as ICrudItemParams<T>)
    }

    public sorts(value: string | CrudItemParams<T>): this {

        this._params.sort = Object.assign(this._params.sort || {}, value);

        return this
    }

    public field(key: keyof Partial<T>, value?: any): this {
        return this.fields({[key]: value ?? 1} as ICrudItemParams<T>)
    }

    public fields(value: ICrudItemParams<T>): this {
        this._params.fields = Object.assign(this._params.fields || {}, value);
        return this
    }

    public filter(key: keyof Partial<T>, value: any): this {
        return this.filters({[key]: value} as ICrudItemParams<T>)
    }

    public filters(value: ICrudItemParams<T>): this {
        this._params.filter = Object.assign(this._params.filter || {}, value);
        return this
    }

    public populates(value: IQueryPopulateOptions[]): this {
        value.forEach(pop => this.populate(pop));
        return this;
    }


    public populate(value: string | IQueryPopulateOptions): this {
        if (!Array.isArray(this._params.populate)) {
            this._params.populate = [];
        }

        this._params.populate.push(value as IQueryPopulateOptions);

        return this
    }

    public page(value: number): this {
        this._params.page = value;
        return this
    }

    public pageSize(value: number): this {
        this._params.pageSize = value;
        return this
    }

    public lean(value = true): this {
        this._params.lean = true
        return this
    }


}
