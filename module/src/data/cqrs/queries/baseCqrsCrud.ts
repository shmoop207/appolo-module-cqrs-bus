import {BaseFindOneDataQuery} from "./baseFindOneDataQuery";
import {BaseGetAllDataQuery} from "./baseGetAllDataQuery";
import {BaseCreateDataCommand, BaseCreateDataQuery} from "./baseCreateDataQuery";
import {BaseDeleteDataQuery} from "./baseDeleteDataQuery";
import {BaseUpdateDataCommand, BaseUpdateDataQuery} from "./baseUpdateDataQuery";
import {BaseCommand, BaseQuery, QueryBus, query, command} from "../../../../../"
import {lazy, Injector, define} from "@appolo/inject";
import {HandlerOptions} from "../../../decorators/decorators";

export abstract class BaseCqrsCrud<T> {
    @lazy() protected inject: Injector

    protected abstract Namespace: string

    public getAll(options?: HandlerOptions) {
        let temp = class extends BaseGetAllDataQuery<T> {

        }
        define()(temp)
        query({fn: temp, type: `${this.Namespace}.getAllQuery`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : temp;
    }

    public getFindOne(options?: HandlerOptions) {
        let temp = class extends BaseFindOneDataQuery<T> {

        }

        query({fn: temp, type: `${this.Namespace}.getFindOne`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : temp;
    }

    public create(options?: HandlerOptions) {
        let temp = class extends BaseCreateDataQuery<T> {

        }

        query({fn: temp, type: `${this.Namespace}.createQuery`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : temp;
    }

    public createCommand(options?: HandlerOptions) {
        let temp = class extends BaseCreateDataCommand<T> {

        }

        command({fn: temp, type: `${this.Namespace}.createCommand`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : temp;
    }

    public update(options?: HandlerOptions) {
        let temp = class extends BaseUpdateDataQuery<T> {

        }

        command({fn: temp, type: `${this.Namespace}.updateQuery`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : temp;
    }

    public updateCommand(options?: HandlerOptions) {
        let temp = class extends BaseUpdateDataCommand<T> {

        }

        command({fn: temp, type: `${this.Namespace}.updateCommand`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : temp;
    }

    public delete(options?: HandlerOptions) {
        let temp = class extends BaseDeleteDataQuery<T> {

        }

        command({fn: temp, type: `${this.Namespace}.deleteQuery`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : temp;
    }

    public deleteCommand(options?: HandlerOptions) {
        let temp = class extends BaseDeleteDataQuery<T> {

        }

        command({fn: temp, type: `${this.Namespace}.deleteCommand`, ...options})(temp);

        return this.inject ? this.inject.wire(temp) : temp;
    }
}


