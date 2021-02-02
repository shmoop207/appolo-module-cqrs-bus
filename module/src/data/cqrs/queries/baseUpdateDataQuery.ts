"use strict";
import {BaseCommand, BaseQuery, QueryBus} from "../../../../../"


interface IBaseUpdateDataQueryParams<T> {
    data?: Partial<T>
    id?: string
}

export abstract class BaseUpdateDataQuery<T> extends BaseQuery<IBaseUpdateDataQueryParams<T>, T> {

    public data(data: Partial<T>): this {
        this._params.data = data;
        return this;
    }

    public id(id: string): this {
        this._params.id = id;
        return this;
    }

}

export abstract class BaseUpdateDataCommand<T> extends BaseCommand<IBaseUpdateDataQueryParams<T>> {

    public data(data: Partial<T>): this {
        this._params.data = data;
        return this;
    }

    public id(id: string): this {
        this._params.id = id;
        return this;
    }


}
