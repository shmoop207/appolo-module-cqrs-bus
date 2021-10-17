"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeHandler = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const index_1 = require("../../../../index");
const someCommand_1 = require("./someCommand");
const manager_1 = require("../manager/manager");
const someEvent_1 = require("../events/someEvent");
const someEvent3_1 = require("../events/someEvent3");
const someEvent2_1 = require("../events/someEvent2");
let SomeHandler = class SomeHandler {
    async handleSomeCommand(command) {
        this.manager.commandHandled = command.name;
        await Promise.all([this.eventsBus.publish(new someEvent_1.SomeEvent("bb")),
            this.eventsBus.publish(new someEvent2_1.SomeEvent2("cc")),
            this.eventsBus.publish(new someEvent3_1.SomeEvent3("dd"))]);
    }
};
(0, tslib_1.__decorate)([
    (0, inject_1.inject)(),
    (0, tslib_1.__metadata)("design:type", manager_1.Manager)
], SomeHandler.prototype, "manager", void 0);
(0, tslib_1.__decorate)([
    (0, inject_1.inject)(),
    (0, tslib_1.__metadata)("design:type", index_1.EventsBus)
], SomeHandler.prototype, "eventsBus", void 0);
(0, tslib_1.__decorate)([
    (0, index_1.command)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [someCommand_1.SomeCommand]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SomeHandler.prototype, "handleSomeCommand", null);
SomeHandler = (0, tslib_1.__decorate)([
    (0, inject_1.define)(),
    (0, inject_1.singleton)()
], SomeHandler);
exports.SomeHandler = SomeHandler;
//# sourceMappingURL=someHandler.js.map