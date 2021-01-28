"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEvent = exports.Event = void 0;
const tslib_1 = require("tslib");
const index_1 = require("@appolo/inject/index");
const eventsBus_1 = require("../events/eventsBus");
class Event {
}
exports.Event = Event;
class BaseEvent {
    constructor(_params) {
        this._params = _params;
        this._params = _params || {};
    }
    toJSON() {
        return Object.assign({}, this._params);
    }
    publish() {
        return this.eventsBus.publish(this);
    }
}
tslib_1.__decorate([
    index_1.lazy(),
    tslib_1.__metadata("design:type", eventsBus_1.EventsBus)
], BaseEvent.prototype, "eventsBus", void 0);
exports.BaseEvent = BaseEvent;
//# sourceMappingURL=IEvent.js.map