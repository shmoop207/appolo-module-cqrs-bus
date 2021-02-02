"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGetAllDataQuery = void 0;
const __1 = require("../../../../../");
class BaseGetAllDataQuery extends __1.BaseQuery {
    constructor(params = {}) {
        super(params);
    }
    sort(key, value) {
        return this.sorts({ [key]: value | 1 });
    }
    sorts(value) {
        this._params.sort = Object.assign(this._params.sort || {}, value);
        return this;
    }
    field(key, value) {
        return this.fields({ [key]: value || 1 });
    }
    fields(value) {
        this._params.fields = Object.assign(this._params.fields || {}, value);
        return this;
    }
    filter(key, value) {
        return this.filters({ [key]: value });
    }
    filters(value) {
        this._params.filter = Object.assign(this._params.filter || {}, value);
        return this;
    }
    populates(value) {
        value.forEach(pop => this.populate(pop));
        return this;
    }
    populate(value) {
        if (!Array.isArray(this._params.populate)) {
            this._params.populate = [];
        }
        this._params.populate.push(value);
        return this;
    }
    page(value) {
        this._params.page = value;
        return this;
    }
    pageSize(value) {
        this._params.pageSize = value;
        return this;
    }
    lean(value = true) {
        this._params.lean = true;
        return this;
    }
}
exports.BaseGetAllDataQuery = BaseGetAllDataQuery;
//# sourceMappingURL=baseGetAllDataQuery.js.map