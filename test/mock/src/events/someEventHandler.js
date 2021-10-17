"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeEventHandler = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const index_1 = require("../../../../index");
const manager_1 = require("../manager/manager");
const someEvent_1 = require("./someEvent");
const someEvent2_1 = require("./someEvent2");
const someEvent3_1 = require("./someEvent3");
let SomeEventHandler = class SomeEventHandler {
    async handleSomeEvent(command) {
        return this.manager.event1Handled = command.name;
    }
    async handleSomeEvent2(command) {
        return this.manager.event2Handled = command.name;
    }
    async handleSomeEvent3(command) {
        return this.manager.event3Handled = command.name;
    }
    // @saga([SomeEvent2, SomeEvent3])
    async handleSomeSaga(event2, event3) {
        return this.manager.event3Handled = index_1.command.name;
    }
};
(0, tslib_1.__decorate)([
    (0, inject_1.inject)(),
    (0, tslib_1.__metadata)("design:type", manager_1.Manager)
], SomeEventHandler.prototype, "manager", void 0);
(0, tslib_1.__decorate)([
    (0, index_1.event)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [someEvent_1.SomeEvent]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SomeEventHandler.prototype, "handleSomeEvent", null);
(0, tslib_1.__decorate)([
    (0, index_1.event)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [someEvent2_1.SomeEvent2]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SomeEventHandler.prototype, "handleSomeEvent2", null);
(0, tslib_1.__decorate)([
    (0, index_1.event)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [someEvent3_1.SomeEvent3]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SomeEventHandler.prototype, "handleSomeEvent3", null);
SomeEventHandler = (0, tslib_1.__decorate)([
    (0, inject_1.define)(),
    (0, inject_1.singleton)()
], SomeEventHandler);
exports.SomeEventHandler = SomeEventHandler;
//# sourceMappingURL=someEventHandler.js.map