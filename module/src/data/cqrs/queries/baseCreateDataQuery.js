"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCreateDataCommand = exports.BaseCreateDataQuery = void 0;
const __1 = require("../../../../../");
class BaseCreateDataQuery extends __1.BaseQuery {
    data(data) {
        this._params.data = data;
        return this;
    }
}
exports.BaseCreateDataQuery = BaseCreateDataQuery;
class BaseCreateDataCommand extends __1.BaseCommand {
    data(data) {
        this._params.data = data;
        return this;
    }
}
exports.BaseCreateDataCommand = BaseCreateDataCommand;
//# sourceMappingURL=baseCreateDataQuery.js.map