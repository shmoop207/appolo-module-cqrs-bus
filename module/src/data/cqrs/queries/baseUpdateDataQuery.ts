"use strict";
import {BaseCommand, BaseQuery, QueryBus} from "../../../../../"
import {ICrudItemParams} from "../../interfaces/IGetAllParams";
import {RecursivePartial} from "@appolo/utils"


interface IBaseUpdateDataQueryParams<T> {
    data?: RecursivePartial<T>
    id?: string
}

interface IBaseUpdateAllDataQueryParams<T> {
    data?: RecursivePartial<T>
    filter?: string | ICrudItemParams<T>,

}

export abstract class BaseUpdateDataQuery<T> extends BaseQuery<IBaseUpdateDataQueryParams<T>, T> {

    public data(data: RecursivePartial<T>): this {
        this._params.data = data;
        return this;
    }

    public id(id: string): this {
        this._params.id = id;
        return this;
    }

}

export abstract class BaseUpdateDataCommand<T> extends BaseCommand<IBaseUpdateDataQueryParams<T>> {

    public data(data: RecursivePartial<T>): this {
        this._params.data = data;
        return this;
    }

    public id(id: string): this {
        this._params.id = id;
        return this;
    }


}

export abstract class BaseUpdateAllDataQuery<T> extends BaseQuery<IBaseUpdateAllDataQueryParams<T>, void> {

    public data(data: RecursivePartial<T>): this {
        this._params.data = data;
        return this;
    }

    public filter(key: keyof RecursivePartial<T>, value?: any): this {
        return this.filters({[key]: value ?? 1} as ICrudItemParams<T>)
    }

    public filters(value: ICrudItemParams<T>): this {
        this._params.filter = Object.assign(this._params.filter || {}, value);
        return this
    }


}

export abstract class BaseUpdateAllDataCommand<T> extends BaseCommand<IBaseUpdateAllDataQueryParams<T>> {

    public data(data: Partial<T>): this {
        this._params.data = data;
        return this;
    }

    public filter(key: keyof Partial<T>, value?: any): this {
        return this.filters({[key]: value ?? 1} as ICrudItemParams<T>)
    }

    public filters(value: ICrudItemParams<T>): this {
        this._params.filter = Object.assign(this._params.filter || {}, value);
        return this
    }


}
