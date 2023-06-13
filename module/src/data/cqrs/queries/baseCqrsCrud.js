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
const utils_1 = require("@appolo/utils");
const cqrsCrudDecorator_1 = require("./cqrsCrudDecorator");
const baseCountAllDataQuery_1 = require("./baseCountAllDataQuery");
class BaseCqrsCrud {
    _getNamespace() {
        let { namespace } = utils_1.Reflector.getFnMetadata(cqrsCrudDecorator_1.CqrsCrudModelSymbol, this.constructor);
        return namespace;
    }
    getAll(options) {
        let temp = class extends baseGetAllDataQuery_1.BaseGetAllDataQuery {
        };
        (0, inject_1.define)()(temp);
        (0, __1.query)(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Query.#`, type: `${this._getNamespace()}.GetAllQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    countAll(options) {
        let temp = class extends baseCountAllDataQuery_1.BaseCountAllDataQuery {
        };
        (0, inject_1.define)()(temp);
        (0, __1.query)(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Query.#`, type: `${this._getNamespace()}.GetCountQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    findOne(options) {
        let temp = class extends baseFindOneDataQuery_1.BaseFindOneDataQuery {
        };
        (0, inject_1.define)()(temp);
        (0, __1.query)(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Query.#`, type: `${this._getNamespace()}.FindOne` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    create(options) {
        let temp = class extends baseCreateDataQuery_1.BaseCreateDataQuery {
        };
        (0, inject_1.define)()(temp);
        (0, __1.query)(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Query.#`, type: `${this._getNamespace()}.CreateQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    createCommand(options) {
        let temp = class extends baseCreateDataQuery_1.BaseCreateDataCommand {
        };
        (0, inject_1.define)()(temp);
        (0, __1.command)(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Command.#`, type: `${this._getNamespace()}.CreateCommand` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    update(options) {
        let temp = class extends baseUpdateDataQuery_1.BaseUpdateDataQuery {
        };
        (0, inject_1.define)()(temp);
        (0, __1.query)(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Query.#`, type: `${this._getNamespace()}.UpdateQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    updateCommand(options) {
        let temp = class extends baseUpdateDataQuery_1.BaseUpdateDataCommand {
        };
        (0, inject_1.define)()(temp);
        (0, __1.command)(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Command.#`, type: `${this._getNamespace()}.UpdateCommand` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    delete(options) {
        let temp = class extends baseDeleteDataQuery_1.BaseDeleteDataQuery {
        };
        (0, inject_1.define)()(temp);
        (0, __1.query)(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Query.#`, type: `${this._getNamespace()}.DeleteQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    deleteCommand(options) {
        let temp = class extends baseDeleteDataQuery_1.BaseDeleteDataCommand {
        };
        (0, inject_1.define)()(temp);
        (0, __1.command)(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Command.#`, type: `${this._getNamespace()}.DeleteCommand` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    updateAll(options) {
        let temp = class extends baseUpdateDataQuery_1.BaseUpdateAllDataQuery {
        };
        (0, inject_1.define)()(temp);
        (0, __1.query)(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Query.#`, type: `${this._getNamespace()}.UpdateAllQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    updateAllCommand(options) {
        let temp = class extends baseUpdateDataQuery_1.BaseUpdateAllDataCommand {
        };
        (0, inject_1.define)()(temp);
        (0, __1.command)(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Command.#`, type: `${this._getNamespace()}.UpdateAllCommand` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
}
tslib_1.__decorate([
    (0, inject_1.lazy)(),
    tslib_1.__metadata("design:type", inject_1.Injector)
], BaseCqrsCrud.prototype, "inject", void 0);
exports.BaseCqrsCrud = BaseCqrsCrud;
//# sourceMappingURL=baseCqrsCrud.js.map