"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudModelManager = exports.CrudModel = void 0;
const tslib_1 = require("tslib");
const index_1 = require("../../../../index");
const inject_1 = require("@appolo/inject");
let CrudModel = class CrudModel extends index_1.BaseCqrsCrud {
};
CrudModel = tslib_1.__decorate([
    (0, index_1.crudQueryModel)("Test.Curd.Model")
], CrudModel);
exports.CrudModel = CrudModel;
let CrudModelManager = class CrudModelManager {
    getAll(options) {
        return { results: [{ name: options.filter.name ? "aaa" : "bbb" }] };
    }
};
CrudModelManager = tslib_1.__decorate([
    (0, inject_1.define)(),
    (0, index_1.crudQuery)(CrudModel)
], CrudModelManager);
exports.CrudModelManager = CrudModelManager;
//# sourceMappingURL=crudModel.js.map