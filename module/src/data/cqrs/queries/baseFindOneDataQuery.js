"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFindOneDataQuery = void 0;
const __1 = require("../../../../../");
class BaseFindOneDataQuery extends __1.BaseQuery {
    constructor(params = {}) {
        super(params);
        if (params.id) {
            this.id(params.id);
        }
    }
    id(id) {
        this.filter("_id", id);
        return this;
    }
    field(key, value) {
        return this.fields({ [key]: value !== null && value !== void 0 ? value : 1 });
    }
    fields(value) {
        this._params.fields = Object.assign(this._params.fields || {}, value);
        return this;
    }
    filter(key, value) {
        return this.filters({ [key]: value !== null && value !== void 0 ? value : 1 });
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
    lean(value = true) {
        this._params.lean = value;
        return this;
    }
}
exports.BaseFindOneDataQuery = BaseFindOneDataQuery;
//# sourceMappingURL=baseFindOneDataQuery.js.map