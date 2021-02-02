"use strict";
import {BaseCommand, BaseQuery, QueryBus} from "../../../../../"
import {lazy} from "@appolo/inject"
import {ICrudItemParams, IGetAllParams, IQueryPopulateOptions} from "../../interfaces/IGetAllParams";

interface IBaseDeleteDataQueryParams<T> {
    id?: string
    hard?: boolean
}

export abstract class BaseDeleteDataQuery<T> extends BaseQuery<IBaseDeleteDataQueryParams<T>, T> {

    public hard(hard: boolean): this {
        this._params.hard = hard;
        return this;
    }

    public id(id: string): this {
        this._params.id = id;
        return this;
    }
}

export abstract class BaseDeleteDataCommand<T> extends BaseCommand<IBaseDeleteDataQueryParams<T>> {

    public hard(hard: boolean): this {
        this._params.hard = hard;
        return this;
    }

    public id(id: string): this {
        this._params.id = id;
        return this;
    }
}
