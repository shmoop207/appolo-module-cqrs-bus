import {lazy} from "@appolo/inject/index";
import {QueryBus} from "./queryBus";
import {IPublishProviderOptions} from "@appolo/bus/index";

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

    public setParams(value: Partial<T>): this {
        this._params = Object.assign(this._params, value);

        return this;
    }

    public query(opts: Partial<IPublishProviderOptions> = {}): Promise<K> {
        return this.queryBus.query<K>(this, opts)
    }
}
