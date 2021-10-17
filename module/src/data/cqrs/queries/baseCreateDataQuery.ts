"use strict";
import {BaseCommand, BaseQuery, QueryBus} from "../../../../../"
import {RecursivePartial} from "@appolo/utils"

interface IBaseCreateDataQueryParams<T> {
    data?: RecursivePartial<T>
}

export abstract class BaseCreateDataQuery<T> extends BaseQuery<IBaseCreateDataQueryParams<T>, T> {

    public data(data: RecursivePartial<T>): this {
        this._params.data = data;
        return this;
    }
}

export abstract class BaseCreateDataCommand<T> extends BaseCommand<IBaseCreateDataQueryParams<T>> {

    public data(data: RecursivePartial<T>): this {
        this._params.data = data;
        return this;
    }


}
