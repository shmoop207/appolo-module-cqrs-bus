import {BaseCqrsCrud} from "./baseCqrsCrud";
import {BaseGetAllDataQuery} from "./baseGetAllDataQuery";
import {BaseFindOneDataQuery} from "./baseFindOneDataQuery";
import {command, query} from "../../../../../index";
import {IBaseCrudManager} from "../../interfaces/IBaseCrudManager";
import {BaseCreateDataQuery} from "./baseCreateDataQuery";
import {
    BaseUpdateAllDataCommand,
    BaseUpdateAllDataQuery,
    BaseUpdateDataCommand,
    BaseUpdateDataQuery
} from "./baseUpdateDataQuery";
import {BaseDeleteDataCommand, BaseDeleteDataQuery} from "./baseDeleteDataQuery";
import {ICommandCtr} from "../../../commands/ICommand";
import {IQueryCtr} from "../../../query/IQuery";
import {define} from "@appolo/inject";
import {Reflector} from "@appolo/utils";
import {BaseCountAllDataQuery} from "./baseCountAllDataQuery";

export function crudQuery(crudFn: { new(...args: any[]): BaseCqrsCrud<any> }, options?: {}): (fn: Function) => void {

    return function (fn: Function) {
        fn.prototype["cqrsGetOneQuery"] = async function (this: IBaseCrudManager<any>, command: BaseFindOneDataQuery<any>) {
            let results = await this.findOne(command.toJSON());
            return results;
        }

        fn.prototype["cqrsGetAllQuery"] = async function (this: IBaseCrudManager<any>, command: BaseGetAllDataQuery<any>) {
            return this.getAll(command.toJSON());
        }

        fn.prototype["cqrsCountAllQuery"] = async function (this: IBaseCrudManager<any>, command: BaseCountAllDataQuery<any>) {
            return this.countAll(command.toJSON());
        }

        fn.prototype["cqrsCreateQuery"] = async function (this: IBaseCrudManager<any>, command: BaseCreateDataQuery<any>) {
            return this.create(command.toJSON().data);
        }
        fn.prototype["cqrsCreateCommand"] = async function (this: IBaseCrudManager<any>, command: BaseCreateDataQuery<any>) {
            return this.create(command.toJSON().data);
        }

        fn.prototype["cqrsUpdateQuery"] = async function (this: IBaseCrudManager<any>, command: BaseUpdateDataQuery<any>) {
            const {id, data} = command.toJSON()

            return this.updateById(id, data);
        }
        fn.prototype["cqrsUpdateCommand"] = async function (this: IBaseCrudManager<any>, command: BaseUpdateDataCommand<any>) {
            const {id, data} = command.toJSON()

            return this.updateById(id, data);
        }

        fn.prototype["cqrsDeleteQuery"] = async function (this: IBaseCrudManager<any>, command: BaseDeleteDataQuery<any>) {
            const {id, hard} = command.toJSON()

            return this.deleteById(id, hard);
        }
        fn.prototype["cqrsDeleteCommand"] = async function (this: IBaseCrudManager<any>, command: BaseDeleteDataCommand<any>) {
            const {id, hard} = command.toJSON()

            return this.deleteById(id, hard);
        }

        fn.prototype["cqrsUpdateAllQuery"] = async function (this: IBaseCrudManager<any>, command: BaseUpdateAllDataQuery<any>) {
            const {filter, data} = command.toJSON()

            return this.updateAll(filter, data);
        }
        fn.prototype["cqrsUpdateAllCommand"] = async function (this: IBaseCrudManager<any>, command: BaseUpdateAllDataCommand<any>) {
            const {filter, data} = command.toJSON()

            return this.updateAll(filter, data);
        }

        let crud = new crudFn();

        query({fn: crud.findOne().constructor as IQueryCtr})(fn.prototype, "cqrsGetOneQuery");
        query({fn: crud.getAll().constructor as IQueryCtr})(fn.prototype, "cqrsGetAllQuery");
        query({fn: crud.countAll().constructor as IQueryCtr})(fn.prototype, "cqrsCountAllQuery");


        query({fn: crud.create().constructor as IQueryCtr})(fn.prototype, "cqrsCreateQuery");
        command({fn: crud.createCommand().constructor as ICommandCtr})(fn.prototype, "cqrsCreateCommand");

        query({fn: crud.update().constructor as IQueryCtr})(fn.prototype, "cqrsUpdateQuery");
        command({fn: crud.updateCommand().constructor as ICommandCtr})(fn.prototype, "cqrsUpdateCommand");

        query({fn: crud.delete().constructor as IQueryCtr})(fn.prototype, "cqrsDeleteQuery");
        command({fn: crud.deleteCommand().constructor as ICommandCtr})(fn.prototype, "cqrsDeleteCommand");

        query({fn: crud.updateAll().constructor as IQueryCtr})(fn.prototype, "cqrsUpdateAllQuery");
        command({fn: crud.updateAllCommand().constructor as ICommandCtr})(fn.prototype, "cqrsUpdateAllCommand");

    }
}

export const CqrsCrudModelSymbol = "__CqrsCrudModelSymbol__"

export interface ICqrsCrudModelMetadata {
    namespace: string
}

export function crudQueryModel(namespace: string): (fn: Function) => void {

    return function (fn: Function) {
        define()(fn)
        let dto: ICqrsCrudModelMetadata = {namespace}
        Reflector.setMetadata(CqrsCrudModelSymbol, dto, fn);
    }
}
