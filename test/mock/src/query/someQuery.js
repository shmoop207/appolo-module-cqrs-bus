"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeQuery = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("../../../../module/src/decorators/decorators");
const inject_1 = require("@appolo/inject");
const IQuery_1 = require("../../../../module/src/interfaces/IQuery");
let SomeQuery = class SomeQuery extends IQuery_1.BaseQuery {
};
SomeQuery = tslib_1.__decorate([
    decorators_1.query(),
    inject_1.define()
], SomeQuery);
exports.SomeQuery = SomeQuery;
//# sourceMappingURL=someQuery.js.map