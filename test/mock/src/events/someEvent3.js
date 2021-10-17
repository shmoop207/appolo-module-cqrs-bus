"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeEvent3 = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("../../../../module/src/decorators/decorators");
let SomeEvent3 = class SomeEvent3 {
    constructor(name) {
        this.name = name;
    }
};
SomeEvent3 = (0, tslib_1.__decorate)([
    (0, decorators_1.event)(),
    (0, tslib_1.__metadata)("design:paramtypes", [String])
], SomeEvent3);
exports.SomeEvent3 = SomeEvent3;
//# sourceMappingURL=someEvent3.js.map