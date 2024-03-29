import {BaseFindOneDataQuery} from "./baseFindOneDataQuery";
import {BaseGetAllDataQuery} from "./baseGetAllDataQuery";
import {BaseCreateDataCommand, BaseCreateDataQuery} from "./baseCreateDataQuery";
import {BaseDeleteDataCommand, BaseDeleteDataQuery} from "./baseDeleteDataQuery";
import {
    BaseUpdateAllDataCommand,
    BaseUpdateAllDataQuery,
    BaseUpdateDataCommand,
    BaseUpdateDataQuery
} from "./baseUpdateDataQuery";
import {BaseCommand, BaseQuery, QueryBus, query, command} from "../../../../../"
import {lazy, Injector, define} from "@appolo/inject";
import {HandlerOptions} from "../../../decorators/decorators";
import {Reflector} from "@appolo/utils";
import {CqrsCrudModelSymbol, ICqrsCrudModelMetadata} from "./cqrsCrudDecorator";
import {BaseCountAllDataQuery} from "./baseCountAllDataQuery";

export abstract class BaseCqrsCrud<T> {
    @lazy() protected inject: Injector

    private _getNamespace(): string {
        let {namespace} = Reflector.getFnMetadata<ICqrsCrudModelMetadata>(CqrsCrudModelSymbol, this.constructor)
        return namespace
    }

    public getAll(options?: HandlerOptions): BaseGetAllDataQuery<T> {
        let temp = class extends BaseGetAllDataQuery<T> {

        }

        define()(temp)
        query({
            fn: temp,
            routingKey: `${this._getNamespace()}.Query.#`,
            type: `${this._getNamespace()}.GetAllQuery`, ...options
        })(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public countAll(options?: HandlerOptions): BaseCountAllDataQuery<T> {
        let temp = class extends BaseCountAllDataQuery<T> {

        }

        define()(temp)
        query({
            fn: temp,
            routingKey: `${this._getNamespace()}.Query.#`,
            type: `${this._getNamespace()}.GetCountQuery`, ...options
        })(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public findOne(options?: HandlerOptions): BaseFindOneDataQuery<T> {
        let temp = class extends BaseFindOneDataQuery<T> {

        }
        define()(temp)
        query({
            fn: temp,
            routingKey: `${this._getNamespace()}.Query.#`,
            type: `${this._getNamespace()}.FindOne`, ...options
        })(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public create(options?: HandlerOptions): BaseCreateDataQuery<T> {
        let temp = class extends BaseCreateDataQuery<T> {

        }
        define()(temp)
        query({
            fn: temp,
            routingKey: `${this._getNamespace()}.Query.#`,
            type: `${this._getNamespace()}.CreateQuery`, ...options
        })(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public createCommand(options?: HandlerOptions): BaseCreateDataCommand<T> {
        let temp = class extends BaseCreateDataCommand<T> {

        }
        define()(temp)
        command({
            fn: temp,
            routingKey: `${this._getNamespace()}.Command.#`,
            type: `${this._getNamespace()}.CreateCommand`, ...options
        })(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public update(options?: HandlerOptions): BaseUpdateDataQuery<T> {
        let temp = class extends BaseUpdateDataQuery<T> {

        }
        define()(temp)
        query({
            fn: temp,
            routingKey: `${this._getNamespace()}.Query.#`,
            type: `${this._getNamespace()}.UpdateQuery`, ...options
        })(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public updateCommand(options?: HandlerOptions): BaseUpdateDataCommand<T> {
        let temp = class extends BaseUpdateDataCommand<T> {

        }
        define()(temp)
        command({
            fn: temp,
            routingKey: `${this._getNamespace()}.Command.#`,
            type: `${this._getNamespace()}.UpdateCommand`, ...options
        })(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public delete(options?: HandlerOptions): BaseDeleteDataQuery<T> {
        let temp = class extends BaseDeleteDataQuery<T> {

        }
        define()(temp)
        query({
            fn: temp,
            routingKey: `${this._getNamespace()}.Query.#`,
            type: `${this._getNamespace()}.DeleteQuery`, ...options
        })(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public deleteCommand(options?: HandlerOptions): BaseDeleteDataCommand<T> {
        let temp = class extends BaseDeleteDataCommand<T> {

        }
        define()(temp)
        command({
            fn: temp,
            routingKey: `${this._getNamespace()}.Command.#`,
            type: `${this._getNamespace()}.DeleteCommand`, ...options
        })(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }


    public updateAll(options?: HandlerOptions): BaseUpdateAllDataQuery<T> {
        let temp = class extends BaseUpdateAllDataQuery<T> {

        }
        define()(temp)
        query({
            fn: temp,
            routingKey: `${this._getNamespace()}.Query.#`,
            type: `${this._getNamespace()}.UpdateAllQuery`, ...options
        })(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public updateAllCommand(options?: HandlerOptions): BaseUpdateAllDataCommand<T> {
        let temp = class extends BaseUpdateAllDataCommand<T> {

        }
        define()(temp)
        command({
            fn: temp,
            routingKey: `${this._getNamespace()}.Command.#`,
            type: `${this._getNamespace()}.UpdateAllCommand`, ...options
        })(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }
}


