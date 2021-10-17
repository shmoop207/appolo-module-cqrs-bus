"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBus = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const baseBus_1 = require("../base/baseBus");
const decorators_1 = require("../decorators/decorators");
let QueryBus = class QueryBus extends baseBus_1.BaseBus {
    constructor() {
        super(...arguments);
        this.Symbol = decorators_1.QueryHandlerSymbol;
    }
    query(query, options = {}) {
        return this.requestFromBus(query, options);
    }
};
QueryBus = (0, tslib_1.__decorate)([
    (0, inject_1.define)(),
    (0, inject_1.singleton)()
], QueryBus);
exports.QueryBus = QueryBus;
//# sourceMappingURL=queryBus.js.map