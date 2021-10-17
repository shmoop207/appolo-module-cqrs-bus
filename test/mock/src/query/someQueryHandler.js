"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeQueryHandler = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const index_1 = require("../../../../index");
const manager_1 = require("../manager/manager");
const someQuery_1 = require("./someQuery");
let SomeQueryHandler = class SomeQueryHandler {
    async handleSomeEvent(query1) {
        return this.manager.commandHandled + this.manager.event1Handled + this.manager.event2Handled + this.manager.event3Handled;
    }
};
(0, tslib_1.__decorate)([
    (0, inject_1.inject)(),
    (0, tslib_1.__metadata)("design:type", manager_1.Manager)
], SomeQueryHandler.prototype, "manager", void 0);
(0, tslib_1.__decorate)([
    (0, index_1.query)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [someQuery_1.SomeQuery]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SomeQueryHandler.prototype, "handleSomeEvent", null);
SomeQueryHandler = (0, tslib_1.__decorate)([
    (0, inject_1.define)(),
    (0, inject_1.singleton)()
], SomeQueryHandler);
exports.SomeQueryHandler = SomeQueryHandler;
//# sourceMappingURL=someQueryHandler.js.map