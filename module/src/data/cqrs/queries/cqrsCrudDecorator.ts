import {BaseCqrsCrud} from "./baseCqrsCrud";
import {BaseGetAllDataQuery} from "./baseGetAllDataQuery";
import {BaseFindOneDataQuery} from "./baseFindOneDataQuery";
import {query} from "../../../../../index";
import {IBaseCrudManager} from "../../interfaces/IBaseCrudManager";
import {BaseCreateDataQuery} from "./baseCreateDataQuery";
import {BaseUpdateDataCommand, BaseUpdateDataQuery} from "./baseUpdateDataQuery";
import {BaseDeleteDataCommand, BaseDeleteDataQuery} from "./baseDeleteDataQuery";

export function cqrsCrud(crud: BaseCqrsCrud<any>, options?: {}): (fn: Function) => void {

    return function (fn: Function) {
        fn.prototype["cqrsGetOneQuery"] = async function (this: IBaseCrudManager<any>, command: BaseFindOneDataQuery<any>) {
            let results = await this.findOne(command.toJSON());
            return results;
        }

        fn.prototype["cqrsGetAllQuery"] = async function (this: IBaseCrudManager<any>, command: BaseGetAllDataQuery<any>) {
            return this.getAll(command.toJSON());
        }

        fn.prototype["cqrsCreateQuery"] = async function (this: IBaseCrudManager<any>, command: BaseCreateDataQuery<any>) {
            return this.create(command.toJSON());
        }
        fn.prototype["cqrsCreateCommand"] = async function (this: IBaseCrudManager<any>, command: BaseCreateDataQuery<any>) {
            return this.create(command.toJSON());
        }

        fn.prototype["cqrsUpdateQuery"] = async function (this: IBaseCrudManager<any>, command: BaseUpdateDataQuery<any>) {
            const {id, ...rest} = command.toJSON()

            return this.updateById(id, rest);
        }
        fn.prototype["cqrsUpdateCommand"] = async function (this: IBaseCrudManager<any>, command: BaseUpdateDataCommand<any>) {
            const {id, ...rest} = command.toJSON()

            return this.updateById(id, rest);
        }

        fn.prototype["cqrsDeleteQuery"] = async function (this: IBaseCrudManager<any>, command: BaseDeleteDataQuery<any>) {
            const {id, hard} = command.toJSON()

            return this.deleteById(id, hard);
        }
        fn.prototype["cqrsDeleteCommand"] = async function (this: IBaseCrudManager<any>, command: BaseDeleteDataCommand<any>) {
            const {id, hard} = command.toJSON()

            return this.deleteById(id, hard);
        }

        query({fn: crud.getFindOne()})(fn.prototype, "cqrsGetOneQuery");
        query({fn: crud.getAll()})(fn.prototype, "cqrsGetAllQuery");

        query({fn: crud.create()})(fn.prototype, "cqrsCreateQuery");
        query({fn: crud.createCommand()})(fn.prototype, "cqrsCreateCommand");

        query({fn: crud.update()})(fn.prototype, "cqrsUpdateQuery");
        query({fn: crud.updateCommand()})(fn.prototype, "cqrsUpdateCommand");

        query({fn: crud.delete()})(fn.prototype, "cqrsDeleteQuery");
        query({fn: crud.deleteCommand()})(fn.prototype, "cqrsDeleteCommand");

    }
}
