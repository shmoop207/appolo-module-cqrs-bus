"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUpdateDataCommand = exports.BaseUpdateDataQuery = void 0;
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
//# sourceMappingURL=baseUpdateDataQuery.js.map