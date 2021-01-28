import {lazy} from "@appolo/inject/index";
import {CommandsBus} from "../commands/commandsBus";
import {QueryBus} from "../query/queryBus";

export abstract class Query {

}


export interface IQueryCtr {
    new(...rest: any[]): Query
}


export abstract class BaseQuery<T, K> {

    @lazy() protected queryBus: QueryBus

     constructor(protected _params?: T) {
        this._params = _params || {} as any;
    }

    public toJSON() {
        return {...this._params}
    }

    public get params(): T {
        return this._params;
    }

    public query(): Promise<K> {
        return this.queryBus.query<K>(this)
    }
}
