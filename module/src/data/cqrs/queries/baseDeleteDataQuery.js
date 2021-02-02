"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDeleteDataCommand = exports.BaseDeleteDataQuery = void 0;
const __1 = require("../../../../../");
class BaseDeleteDataQuery extends __1.BaseQuery {
    hard(hard = true) {
        this._params.hard = hard;
        return this;
    }
    id(id) {
        this._params.id = id;
        return this;
    }
}
exports.BaseDeleteDataQuery = BaseDeleteDataQuery;
class BaseDeleteDataCommand extends __1.BaseCommand {
    hard(hard = true) {
        this._params.hard = hard;
        return this;
    }
    id(id) {
        this._params.id = id;
        return this;
    }
}
exports.BaseDeleteDataCommand = BaseDeleteDataCommand;
//# sourceMappingURL=baseDeleteDataQuery.js.map