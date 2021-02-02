"use strict";
import {BaseCommand, BaseQuery, QueryBus} from "../../../../../"
import {ICrudItemParams, IFindOneParams, IGetAllParams, IQueryPopulateOptions} from "../../interfaces/IGetAllParams";

export abstract class BaseFindOneDataQuery<T> extends BaseQuery<IFindOneParams<T>, T> {

    constructor(params: IFindOneParams<T> & { id?: string } = {}) {

        super(params);

        if (params.id) {
            this.id(params.id);
        }
    }

    public id(id: string): this {
        this.filter("_id" as any, id)
        return this;
    }

    public field(key: keyof Partial<T>, value?: any): this {
        return this.fields({[key]: value ?? 1} as ICrudItemParams<T>)
    }

    public fields(value: ICrudItemParams<T>): this {
        this._params.fields = Object.assign(this._params.fields || {}, value);
        return this
    }

    public filter(key: keyof Partial<T>, value?: any): this {
        return this.filters({[key]: value ?? 1} as ICrudItemParams<T>)
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

    public lean(value = true): this {
        this._params.lean = value
        return this
    }
}

