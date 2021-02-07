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
class BaseCqrsCrud {
    _getNamespace() {
        let { namespace } = utils_1.Reflector.getFnMetadata(cqrsCrudDecorator_1.CqrsCrudModelSymbol, this.constructor);
        return namespace;
    }
    getAll(options) {
        let temp = class extends baseGetAllDataQuery_1.BaseGetAllDataQuery {
        };
        inject_1.define()(temp);
        __1.query(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Query.#`, type: `${this._getNamespace()}.GetAllQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    findOne(options) {
        let temp = class extends baseFindOneDataQuery_1.BaseFindOneDataQuery {
        };
        inject_1.define()(temp);
        __1.query(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Query.#`, type: `${this._getNamespace()}.FindOne` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    create(options) {
        let temp = class extends baseCreateDataQuery_1.BaseCreateDataQuery {
        };
        inject_1.define()(temp);
        __1.query(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Query.#`, type: `${this._getNamespace()}.CreateQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    createCommand(options) {
        let temp = class extends baseCreateDataQuery_1.BaseCreateDataCommand {
        };
        inject_1.define()(temp);
        __1.command(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Command.#`, type: `${this._getNamespace()}.CreateCommand` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    update(options) {
        let temp = class extends baseUpdateDataQuery_1.BaseUpdateDataQuery {
        };
        inject_1.define()(temp);
        __1.query(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Query.#`, type: `${this._getNamespace()}.UpdateQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    updateCommand(options) {
        let temp = class extends baseUpdateDataQuery_1.BaseUpdateDataCommand {
        };
        inject_1.define()(temp);
        __1.command(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Command.#`, type: `${this._getNamespace()}.UpdateCommand` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    delete(options) {
        let temp = class extends baseDeleteDataQuery_1.BaseDeleteDataQuery {
        };
        inject_1.define()(temp);
        __1.query(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Query.#`, type: `${this._getNamespace()}.DeleteQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    deleteCommand(options) {
        let temp = class extends baseDeleteDataQuery_1.BaseDeleteDataCommand {
        };
        inject_1.define()(temp);
        __1.command(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Command.#`, type: `${this._getNamespace()}.DeleteCommand` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    updateAll(options) {
        let temp = class extends baseUpdateDataQuery_1.BaseUpdateAllDataQuery {
        };
        inject_1.define()(temp);
        __1.query(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Query.#`, type: `${this._getNamespace()}.UpdateAllQuery` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
    updateAllCommand(options) {
        let temp = class extends baseUpdateDataQuery_1.BaseUpdateAllDataCommand {
        };
        inject_1.define()(temp);
        __1.command(Object.assign({ fn: temp, routingKey: `${this._getNamespace()}.Command.#`, type: `${this._getNamespace()}.UpdateAllCommand` }, options))(temp);
        return this.inject ? this.inject.wire(temp) : new temp();
    }
}
tslib_1.__decorate([
    inject_1.lazy(),
    tslib_1.__metadata("design:type", inject_1.Injector)
], BaseCqrsCrud.prototype, "inject", void 0);
exports.BaseCqrsCrud = BaseCqrsCrud;
//# sourceMappingURL=baseCqrsCrud.js.map