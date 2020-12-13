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
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", bus_1.BusProvider)
], SomeCommand.prototype, "busProvider", void 0);
SomeCommand = tslib_1.__decorate([
    index_1.command(),
    inject_1.define(),
    tslib_1.__metadata("design:paramtypes", [String])
], SomeCommand);
exports.SomeCommand = SomeCommand;
//# sourceMappingURL=someCommand.js.map