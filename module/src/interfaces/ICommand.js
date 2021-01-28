"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = exports.Command = void 0;
const tslib_1 = require("tslib");
const commandsBus_1 = require("../commands/commandsBus");
const inject_1 = require("@appolo/inject");
class Command {
}
exports.Command = Command;
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
    exec() {
        return this.commandsBus.execute(this);
    }
}
tslib_1.__decorate([
    inject_1.lazy(),
    tslib_1.__metadata("design:type", commandsBus_1.CommandsBus)
], BaseCommand.prototype, "commandsBus", void 0);
exports.BaseCommand = BaseCommand;
//# sourceMappingURL=ICommand.js.map