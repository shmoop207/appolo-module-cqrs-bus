import {BaseFindOneDataQuery} from "./baseFindOneDataQuery";
import {BaseGetAllDataQuery} from "./baseGetAllDataQuery";
import {BaseCreateDataCommand, BaseCreateDataQuery} from "./baseCreateDataQuery";
import {BaseDeleteDataCommand, BaseDeleteDataQuery} from "./baseDeleteDataQuery";
import {BaseUpdateDataCommand, BaseUpdateDataQuery} from "./baseUpdateDataQuery";
import {BaseCommand, BaseQuery, QueryBus, query, command} from "../../../../../"
import {lazy, Injector, define} from "@appolo/inject";
import {HandlerOptions} from "../../../decorators/decorators";

export abstract class BaseCqrsCrud<T> {
    @lazy() protected inject: Injector

    protected abstract Namespace: string

    public getAll(options?: HandlerOptions): BaseGetAllDataQuery<T> {
        let temp = class extends BaseGetAllDataQuery<T> {

        }
        define()(temp)
        query({fn: temp, type: `${this.Namespace}.getAllQuery`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public findOne(options?: HandlerOptions): BaseFindOneDataQuery<T> {
        let temp = class extends BaseFindOneDataQuery<T> {

        }

        query({fn: temp, type: `${this.Namespace}.getFindOne`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public create(options?: HandlerOptions): BaseCreateDataQuery<T> {
        let temp = class extends BaseCreateDataQuery<T> {

        }

        query({fn: temp, type: `${this.Namespace}.createQuery`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public createCommand(options?: HandlerOptions): BaseCreateDataCommand<T> {
        let temp = class extends BaseCreateDataCommand<T> {

        }

        command({fn: temp, type: `${this.Namespace}.createCommand`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public update(options?: HandlerOptions): BaseUpdateDataQuery<T> {
        let temp = class extends BaseUpdateDataQuery<T> {

        }

        command({fn: temp, type: `${this.Namespace}.updateQuery`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public updateCommand(options?: HandlerOptions): BaseUpdateDataCommand<T> {
        let temp = class extends BaseUpdateDataCommand<T> {

        }

        command({fn: temp, type: `${this.Namespace}.updateCommand`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public delete(options?: HandlerOptions): BaseDeleteDataQuery<T> {
        let temp = class extends BaseDeleteDataQuery<T> {

        }

        command({fn: temp, type: `${this.Namespace}.deleteQuery`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }

    public deleteCommand(options?: HandlerOptions): BaseDeleteDataCommand<T> {
        let temp = class extends BaseDeleteDataCommand<T> {

        }

        command({fn: temp, type: `${this.Namespace}.deleteCommand`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : new temp();
    }
}


