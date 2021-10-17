"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeEvent = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("../../../../module/src/decorators/decorators");
let SomeEvent = class SomeEvent {
    constructor(name) {
        this.name = name;
    }
};
SomeEvent = (0, tslib_1.__decorate)([
    (0, decorators_1.event)(),
    (0, tslib_1.__metadata)("design:paramtypes", [String])
], SomeEvent);
exports.SomeEvent = SomeEvent;
//# sourceMappingURL=someEvent.js.map