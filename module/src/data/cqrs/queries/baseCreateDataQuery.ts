"use strict";
import {BaseCommand, BaseQuery, QueryBus} from "../../../../../"

interface IBaseCreateDataQueryParams<T> {
    data?: Partial<T>
}

export abstract class BaseCreateDataQuery<T> extends BaseQuery<IBaseCreateDataQueryParams<T>, T> {

    public data(data: Partial<T>): this {
        this._params.data = data;
        return this;
    }
}

export abstract class BaseCreateDataCommand<T> extends BaseCommand<IBaseCreateDataQueryParams<T>> {

    public data(data: Partial<T>): this {
        this._params.data = data;
        return this;
    }


}
