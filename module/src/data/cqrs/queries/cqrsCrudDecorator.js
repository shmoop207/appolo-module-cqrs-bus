"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crudQueryModel = exports.CqrsCrudModelSymbol = exports.crudQuery = void 0;
const index_1 = require("../../../../../index");
const inject_1 = require("@appolo/inject");
const utils_1 = require("@appolo/utils");
function crudQuery(crudFn, options) {
    return function (fn) {
        fn.prototype["cqrsGetOneQuery"] = async function (command) {
            let results = await this.findOne(command.toJSON());
            return results;
        };
        fn.prototype["cqrsGetAllQuery"] = async function (command) {
            return this.getAll(command.toJSON());
        };
        fn.prototype["cqrsCreateQuery"] = async function (command) {
            return this.create(command.toJSON().data);
        };
        fn.prototype["cqrsCreateCommand"] = async function (command) {
            return this.create(command.toJSON().data);
        };
        fn.prototype["cqrsUpdateQuery"] = async function (command) {
            const { id, data } = command.toJSON();
            return this.updateById(id, data);
        };
        fn.prototype["cqrsUpdateCommand"] = async function (command) {
            const { id, data } = command.toJSON();
            return this.updateById(id, data);
        };
        fn.prototype["cqrsDeleteQuery"] = async function (command) {
            const { id, hard } = command.toJSON();
            return this.deleteById(id, hard);
        };
        fn.prototype["cqrsDeleteCommand"] = async function (command) {
            const { id, hard } = command.toJSON();
            return this.deleteById(id, hard);
        };
        fn.prototype["cqrsUpdateAllQuery"] = async function (command) {
            const { filter, data } = command.toJSON();
            return this.updateAll(filter, data);
        };
        fn.prototype["cqrsUpdateAllCommand"] = async function (command) {
            const { filter, data } = command.toJSON();
            return this.updateAll(filter, data);
        };
        let crud = new crudFn();
        index_1.query({ fn: crud.findOne().constructor })(fn.prototype, "cqrsGetOneQuery");
        index_1.query({ fn: crud.getAll().constructor })(fn.prototype, "cqrsGetAllQuery");
        index_1.query({ fn: crud.create().constructor })(fn.prototype, "cqrsCreateQuery");
        index_1.command({ fn: crud.createCommand().constructor })(fn.prototype, "cqrsCreateCommand");
        index_1.query({ fn: crud.update().constructor })(fn.prototype, "cqrsUpdateQuery");
        index_1.command({ fn: crud.updateCommand().constructor })(fn.prototype, "cqrsUpdateCommand");
        index_1.query({ fn: crud.delete().constructor })(fn.prototype, "cqrsDeleteQuery");
        index_1.command({ fn: crud.deleteCommand().constructor })(fn.prototype, "cqrsDeleteCommand");
        index_1.query({ fn: crud.updateAll().constructor })(fn.prototype, "cqrsUpdateAllQuery");
        index_1.command({ fn: crud.updateAllCommand().constructor })(fn.prototype, "cqrsUpdateAllCommand");
    };
}
exports.crudQuery = crudQuery;
exports.CqrsCrudModelSymbol = "__CqrsCrudModelSymbol__";
function crudQueryModel(namespace) {
    return function (fn) {
        inject_1.define()(fn);
        let dto = { namespace };
        utils_1.Reflector.setMetadata(exports.CqrsCrudModelSymbol, dto, fn);
    };
}
exports.crudQueryModel = crudQueryModel;
//# sourceMappingURL=cqrsCrudDecorator.js.map