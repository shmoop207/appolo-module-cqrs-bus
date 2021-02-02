import {BaseFindOneDataQuery} from "./baseFindOneDataQuery";
import {BaseGetAllDataQuery} from "./baseGetAllDataQuery";
import {BaseCreateDataCommand, BaseCreateDataQuery} from "./baseCreateDataQuery";
import {BaseDeleteDataQuery} from "./baseDeleteDataQuery";
import {BaseUpdateDataCommand, BaseUpdateDataQuery} from "./baseUpdateDataQuery";
import {BaseCommand, BaseQuery, QueryBus, query, command} from "../../../../../"
import {define} from "@appolo/inject";
import {HandlerOptions} from "../../../decorators/decorators";

export abstract class BaseCqrsCrud<T> {
    protected abstract Namespace: string

    public getAll(options?: HandlerOptions) {
        let temp = class extends BaseGetAllDataQuery<T> {

        }
        define()(temp)
        query({fn: temp, type: `${this.Namespace}.getAllQuery`, ...options})(temp);

        return temp;
    }

    public getFindOne(options?: HandlerOptions) {
        let temp = class extends BaseFindOneDataQuery<T> {

        }

        query({fn: temp, type: `${this.Namespace}.getFindOne`,...options})(temp);

        return temp;
    }

    public create(options?: HandlerOptions) {
        let temp = class extends BaseCreateDataQuery<T> {

        }

        query({fn: temp, type: `${this.Namespace}.createQuery`,...options})(temp);

        return temp;
    }

    public createCommand(options?: HandlerOptions) {
        let temp = class extends BaseCreateDataCommand<T> {

        }

        command({fn: temp, type: `${this.Namespace}.createCommand`,...options})(temp);

        return temp;
    }

    public update(options?: HandlerOptions) {
        let temp = class extends BaseUpdateDataQuery<T> {

        }

        command({fn: temp, type: `${this.Namespace}.updateQuery`,...options})(temp);

        return temp;
    }

    public updateCommand(options?: HandlerOptions) {
        let temp = class extends BaseUpdateDataCommand<T> {

        }

        command({fn: temp, type: `${this.Namespace}.updateCommand`,...options})(temp);

        return temp;
    }

    public delete(options?: HandlerOptions) {
        let temp = class extends BaseDeleteDataQuery<T> {

        }

        command({fn: temp, type: `${this.Namespace}.deleteQuery`,...options})(temp);

        return temp;
    }

    public deleteCommand(options?: HandlerOptions) {
        let temp = class extends BaseDeleteDataQuery<T> {

        }

        command({fn: temp, type: `${this.Namespace}.deleteCommand`,...options})(temp);

        return temp;
    }
}


