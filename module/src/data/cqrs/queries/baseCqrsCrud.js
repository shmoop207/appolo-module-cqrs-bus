"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCqrsCrud = void 0;
const tslib_1 = require("tslib");
const baseFindOneDataQuery_1 = require("./baseFindOneDataQuery");
const baseGetAllDataQuery_1 = require("./baseGetAllDataQuery");
const baseCreateDataQuery_1 = require("./baseCreateDataQuery");
const baseDeleteDataQuery_1 = require("./baseDeleteDataQuery");
const baseUpdateDataQuery_1 = require("./baseUpdateDataQuery");
const __1 = require("../../../../../");
const inject_1 = require("@appolo/inject");
class BaseCqrsCrud {
    getAll(options) {
        let temp = class extends baseGetAllDataQuery_1.BaseGetAllDataQuery {
        };
        inject_1.define()(temp);
        __1.query(Object.assign({ fn: temp, type: `${this.Namespace}.getAllQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : temp;
    }
    getFindOne(options) {
        let temp = class extends baseFindOneDataQuery_1.BaseFindOneDataQuery {
        };
        __1.query(Object.assign({ fn: temp, type: `${this.Namespace}.getFindOne` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : temp;
    }
    create(options) {
        let temp = class extends baseCreateDataQuery_1.BaseCreateDataQuery {
        };
        __1.query(Object.assign({ fn: temp, type: `${this.Namespace}.createQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : temp;
    }
    createCommand(options) {
        let temp = class extends baseCreateDataQuery_1.BaseCreateDataCommand {
        };
        __1.command(Object.assign({ fn: temp, type: `${this.Namespace}.createCommand` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : temp;
    }
    update(options) {
        let temp = class extends baseUpdateDataQuery_1.BaseUpdateDataQuery {
        };
        __1.command(Object.assign({ fn: temp, type: `${this.Namespace}.updateQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : temp;
    }
    updateCommand(options) {
        let temp = class extends baseUpdateDataQuery_1.BaseUpdateDataCommand {
        };
        __1.command(Object.assign({ fn: temp, type: `${this.Namespace}.updateCommand` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : temp;
    }
    delete(options) {
        let temp = class extends baseDeleteDataQuery_1.BaseDeleteDataQuery {
        };
        __1.command(Object.assign({ fn: temp, type: `${this.Namespace}.deleteQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : temp;
    }
    deleteCommand(options) {
        let temp = class extends baseDeleteDataQuery_1.BaseDeleteDataQuery {
        };
        __1.command(Object.assign({ fn: temp, type: `${this.Namespace}.deleteCommand` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : temp;
    }
}
tslib_1.__decorate([
    inject_1.lazy(),
    tslib_1.__metadata("design:type", inject_1.Injector)
], BaseCqrsCrud.prototype, "inject", void 0);
exports.BaseCqrsCrud = BaseCqrsCrud;
//# sourceMappingURL=baseCqrsCrud.js.map