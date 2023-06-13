"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCountAllDataQuery = void 0;
const __1 = require("../../../../../");
class BaseCountAllDataQuery extends __1.BaseQuery {
    constructor(params = {}) {
        super(params);
    }
    filter(key, value) {
        return this.filters({ [key]: value });
    }
    filters(value) {
        this._params.filter = Object.assign(this._params.filter || {}, value);
        return this;
    }
}
exports.BaseCountAllDataQuery = BaseCountAllDataQuery;
//# sourceMappingURL=baseCountAllDataQuery.js.map