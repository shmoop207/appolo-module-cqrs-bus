"use strict";
import {BaseCommand, BaseQuery, QueryBus} from "../../../../../"
import {lazy} from "@appolo/inject"
import {ICountAllParams, ICrudItemParams, IGetAllParams, IQueryPopulateOptions} from "../../interfaces/IGetAllParams";

export type CrudItemParams<T> = { [J in keyof Partial<T>]: any };


export abstract class BaseCountAllDataQuery<T> extends BaseQuery<ICountAllParams<T>, { count: number }> {

    constructor(params: ICountAllParams<T> = {}) {
        super(params);
    }

    public filter(key: keyof Partial<T>, value: any): this {
        return this.filters({[key]: value} as ICrudItemParams<T>)
    }

    public filters(value: ICrudItemParams<T>): this {
        this._params.filter = Object.assign(this._params.filter || ({} as any), value);
        return this
    }


}
