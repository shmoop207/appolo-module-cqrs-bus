"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsBus = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const decorators_1 = require("../decorators/decorators");
const baseBus_1 = require("../base/baseBus");
let CommandsBus = class CommandsBus extends baseBus_1.BaseBus {
    constructor() {
        super(...arguments);
        this.Symbol = decorators_1.CommandHandlerSymbol;
    }
    execute(command, options = {}) {
        return this.publishToBus(command, options);
    }
};
CommandsBus = tslib_1.__decorate([
    (0, inject_1.define)(),
    (0, inject_1.singleton)()
], CommandsBus);
exports.CommandsBus = CommandsBus;
//# sourceMappingURL=commandsBus.js.map