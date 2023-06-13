"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsBus = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const decorators_1 = require("../decorators/decorators");
const baseBus_1 = require("../base/baseBus");
let EventsBus = class EventsBus extends baseBus_1.BaseBus {
    constructor() {
        super(...arguments);
        this.Symbol = decorators_1.EventHandlerSymbol;
    }
    publish(event, options = {}) {
        return this.publishToBus(event, options);
    }
};
EventsBus = tslib_1.__decorate([
    (0, inject_1.define)(),
    (0, inject_1.singleton)()
], EventsBus);
exports.EventsBus = EventsBus;
//# sourceMappingURL=eventsBus.js.map