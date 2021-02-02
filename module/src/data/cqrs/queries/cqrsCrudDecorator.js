"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cqrsCrud = void 0;
const tslib_1 = require("tslib");
const index_1 = require("../../../../../index");
function cqrsCrud(crud, options) {
    return function (fn) {
        fn.prototype["cqrsGetOneQuery"] = async function (command) {
            let results = await this.findOne(command.toJSON());
            return results;
        };
        fn.prototype["cqrsGetAllQuery"] = async function (command) {
            return this.getAll(command.toJSON());
        };
        fn.prototype["cqrsCreateQuery"] = async function (command) {
            return this.create(command.toJSON());
        };
        fn.prototype["cqrsCreateCommand"] = async function (command) {
            return this.create(command.toJSON());
        };
        fn.prototype["cqrsUpdateQuery"] = async function (command) {
            const _a = command.toJSON(), { id } = _a, rest = tslib_1.__rest(_a, ["id"]);
            return this.updateById(id, rest);
        };
        fn.prototype["cqrsUpdateCommand"] = async function (command) {
            const _a = command.toJSON(), { id } = _a, rest = tslib_1.__rest(_a, ["id"]);
            return this.updateById(id, rest);
        };
        fn.prototype["cqrsDeleteQuery"] = async function (command) {
            const { id, hard } = command.toJSON();
            return this.deleteById(id, hard);
        };
        fn.prototype["cqrsDeleteCommand"] = async function (command) {
            const { id, hard } = command.toJSON();
            return this.deleteById(id, hard);
        };
        index_1.query({ fn: crud.getFindOne().constructor })(fn.prototype, "cqrsGetOneQuery");
        index_1.query({ fn: crud.getAll().constructor })(fn.prototype, "cqrsGetAllQuery");
        index_1.query({ fn: crud.create().constructor })(fn.prototype, "cqrsCreateQuery");
        index_1.command({ fn: crud.createCommand().constructor })(fn.prototype, "cqrsCreateCommand");
        index_1.query({ fn: crud.update().constructor })(fn.prototype, "cqrsUpdateQuery");
        index_1.command({ fn: crud.updateCommand().constructor })(fn.prototype, "cqrsUpdateCommand");
        index_1.query({ fn: crud.delete().constructor })(fn.prototype, "cqrsDeleteQuery");
        index_1.command({ fn: crud.deleteCommand().constructor })(fn.prototype, "cqrsDeleteCommand");
    };
}
exports.cqrsCrud = cqrsCrud;
//# sourceMappingURL=cqrsCrudDecorator.js.map