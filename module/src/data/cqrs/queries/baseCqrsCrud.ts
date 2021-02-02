import {BaseFindOneDataQuery} from "./baseFindOneDataQuery";
import {BaseGetAllDataQuery} from "./baseGetAllDataQuery";
import {BaseCreateDataCommand, BaseCreateDataQuery} from "./baseCreateDataQuery";
import {BaseDeleteDataCommand, BaseDeleteDataQuery} from "./baseDeleteDataQuery";
import {BaseUpdateDataCommand, BaseUpdateDataQuery} from "./baseUpdateDataQuery";
import {BaseCommand, BaseQuery, QueryBus, query, command} from "../../../../../"
import {lazy, Injector, define} from "@appolo/inject";
import {HandlerOptions} from "../../../decorators/decorators";
import {Reflector} from "@appolo/utils";
import {CqrsCrudModelSymbol, ICqrsCrudModelMetadata} from "./cqrsCrudDecorator";

export abstract class BaseCqrsCrud<T> {
    @lazy() protected inject: Injector

    private _getNamespace():string{
        let {namespace} = Reflector.getFnMetadata<ICqrsCrudModelMetadata>(CqrsCrudModelSymbol, this.constructor)
        return namespace
    }

    public getAll(options?: HandlerOptions): BaseGetAllDataQuery<T> {
        let temp = class extends BaseGetAllDataQuery<T> {

        }

        define()(temp)
        query({fn: temp, type: `${this._getNamespace()}.GetAllQuery`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public findOne(options?: HandlerOptions): BaseFindOneDataQuery<T> {
        let temp = class extends BaseFindOneDataQuery<T> {

        }

        query({fn: temp, type: `${this._getNamespace()}.FindOne`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public create(options?: HandlerOptions): BaseCreateDataQuery<T> {
        let temp = class extends BaseCreateDataQuery<T> {

        }

        query({fn: temp, type: `${this._getNamespace()}.CreateQuery`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public createCommand(options?: HandlerOptions): BaseCreateDataCommand<T> {
        let temp = class extends BaseCreateDataCommand<T> {

        }

        command({fn: temp, type: `${this._getNamespace()}.CreateCommand`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public update(options?: HandlerOptions): BaseUpdateDataQuery<T> {
        let temp = class extends BaseUpdateDataQuery<T> {

        }

        query({fn: temp, type: `${this._getNamespace()}.UpdateQuery`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public updateCommand(options?: HandlerOptions): BaseUpdateDataCommand<T> {
        let temp = class extends BaseUpdateDataCommand<T> {

        }

        command({fn: temp, type: `${this._getNamespace()}.UpdateCommand`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public delete(options?: HandlerOptions): BaseDeleteDataQuery<T> {
        let temp = class extends BaseDeleteDataQuery<T> {

        }

        query({fn: temp, type: `${this._getNamespace()}.DeleteQuery`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public deleteCommand(options?: HandlerOptions): BaseDeleteDataCommand<T> {
        let temp = class extends BaseDeleteDataCommand<T> {

        }

        command({fn: temp, type: `${this._getNamespace()}.DeleteCommand`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }
}


