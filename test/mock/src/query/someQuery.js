"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeQuery = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("../../../../module/src/decorators/decorators");
const inject_1 = require("@appolo/inject");
const index_1 = require("../../../../index");
let SomeQuery = class SomeQuery extends index_1.BaseQuery {
};
SomeQuery = tslib_1.__decorate([
    (0, decorators_1.query)(),
    (0, inject_1.define)()
], SomeQuery);
exports.SomeQuery = SomeQuery;
//# sourceMappingURL=someQuery.js.map