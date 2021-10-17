"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeEvent2 = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("../../../../module/src/decorators/decorators");
let SomeEvent2 = class SomeEvent2 {
    constructor(name) {
        this.name = name;
    }
};
SomeEvent2 = (0, tslib_1.__decorate)([
    (0, decorators_1.event)(),
    (0, tslib_1.__metadata)("design:paramtypes", [String])
], SomeEvent2);
exports.SomeEvent2 = SomeEvent2;
//# sourceMappingURL=someEvent2.js.map