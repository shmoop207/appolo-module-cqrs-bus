"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEvent = void 0;
const tslib_1 = require("tslib");
const index_1 = require("@appolo/inject/index");
const eventsBus_1 = require("./eventsBus");
class BaseEvent {
    constructor(_params) {
        this._params = _params;
        this._params = _params || {};
    }
    toJSON() {
        return Object.assign({}, this._params);
    }
    get params() {
        return this._params;
    }
    publish(options = {}) {
        return this.eventsBus.publish(this, options);
    }
}
tslib_1.__decorate([
    index_1.lazy(),
    tslib_1.__metadata("design:type", eventsBus_1.EventsBus)
], BaseEvent.prototype, "eventsBus", void 0);
exports.BaseEvent = BaseEvent;
//# sourceMappingURL=baseEvent.js.map