"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseQuery = void 0;
const tslib_1 = require("tslib");
const index_1 = require("@appolo/inject/index");
const queryBus_1 = require("./queryBus");
class BaseQuery {
    constructor(_params) {
        this._params = _params;
        this._params = _params || {};
    }
    toJSON() {
        return Object.assign({}, this._params);
    }
    get params() {
        return this._params;
    }
    setParams(value) {
        this._params = Object.assign(this._params, value);
        return this;
    }
    query(opts = {}) {
        return this.queryBus.query(this, opts);
    }
}
(0, tslib_1.__decorate)([
    (0, index_1.lazy)(),
    (0, tslib_1.__metadata)("design:type", queryBus_1.QueryBus)
], BaseQuery.prototype, "queryBus", void 0);
exports.BaseQuery = BaseQuery;
//# sourceMappingURL=baseQuery.js.map