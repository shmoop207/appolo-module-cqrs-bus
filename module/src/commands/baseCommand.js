"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = void 0;
const tslib_1 = require("tslib");
const commandsBus_1 = require("./commandsBus");
const inject_1 = require("@appolo/inject");
class BaseCommand {
    constructor(_params) {
        this._params = _params;
        this._params = _params || {};
    }
    toJSON() {
        return Object.assign({}, this._params);
    }
    get params() {
        return this._params;
    }
    setParams(value) {
        this._params = Object.assign(this._params, value);
        return this;
    }
    exec(options = {}) {
        return this.commandsBus.execute(this, options);
    }
}
(0, tslib_1.__decorate)([
    (0, inject_1.lazy)(),
    (0, tslib_1.__metadata)("design:type", commandsBus_1.CommandsBus)
], BaseCommand.prototype, "commandsBus", void 0);
exports.BaseCommand = BaseCommand;
//# sourceMappingURL=baseCommand.js.map