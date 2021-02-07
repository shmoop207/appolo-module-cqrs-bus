"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUpdateAllDataCommand = exports.BaseUpdateAllDataQuery = exports.BaseUpdateDataCommand = exports.BaseUpdateDataQuery = void 0;
const __1 = require("../../../../../");
class BaseUpdateDataQuery extends __1.BaseQuery {
    data(data) {
        this._params.data = data;
        return this;
    }
    id(id) {
        this._params.id = id;
        return this;
    }
}
exports.BaseUpdateDataQuery = BaseUpdateDataQuery;
class BaseUpdateDataCommand extends __1.BaseCommand {
    data(data) {
        this._params.data = data;
        return this;
    }
    id(id) {
        this._params.id = id;
        return this;
    }
}
exports.BaseUpdateDataCommand = BaseUpdateDataCommand;
class BaseUpdateAllDataQuery extends __1.BaseCommand {
    data(data) {
        this._params.data = data;
        return this;
    }
    filter(key, value) {
        return this.filters({ [key]: value !== null && value !== void 0 ? value : 1 });
    }
    filters(value) {
        this._params.filter = Object.assign(this._params.filter || {}, value);
        return this;
    }
}
exports.BaseUpdateAllDataQuery = BaseUpdateAllDataQuery;
class BaseUpdateAllDataCommand extends __1.BaseCommand {
    data(data) {
        this._params.data = data;
        return this;
    }
    filter(key, value) {
        return this.filters({ [key]: value !== null && value !== void 0 ? value : 1 });
    }
    filters(value) {
        this._params.filter = Object.assign(this._params.filter || {}, value);
        return this;
    }
}
exports.BaseUpdateAllDataCommand = BaseUpdateAllDataCommand;
//# sourceMappingURL=baseUpdateDataQuery.js.map