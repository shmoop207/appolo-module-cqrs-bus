"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeCommand = void 0;
const tslib_1 = require("tslib");
const index_1 = require("../../../../index");
const inject_1 = require("@appolo/inject");
const bus_1 = require("@appolo/bus");
let SomeCommand = class SomeCommand {
    constructor(name) {
        this.name = name;
    }
};
(0, tslib_1.__decorate)([
    (0, inject_1.inject)(),
    (0, tslib_1.__metadata)("design:type", bus_1.BusProvider)
], SomeCommand.prototype, "busProvider", void 0);
SomeCommand = (0, tslib_1.__decorate)([
    (0, index_1.command)({ retry: { retires: 3 } }),
    (0, inject_1.define)(),
    (0, tslib_1.__metadata)("design:paramtypes", [String])
], SomeCommand);
exports.SomeCommand = SomeCommand;
//# sourceMappingURL=someCommand.js.map