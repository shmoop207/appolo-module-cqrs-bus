"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBus = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const engine_1 = require("@appolo/engine");
const logger_1 = require("@appolo/logger");
const bus_1 = require("@appolo/bus");
const utils_1 = require("@appolo/utils");
class BaseBus {
    initialize() {
    }
    publishToBus(fn, params) {
        let dto = this._getBusParams(params, fn);
        return this.busProvider.publish(dto);
    }
    requestFromBus(fn, params) {
        let dto = this._getBusParams(params, fn);
        return this.busProvider.request(dto);
    }
    _getBusParams(params, fn) {
        let type = fn.constructor.name;
        let commandOptions = utils_1.Reflector.getFnMetadata(this.Symbol, fn.constructor);
        let dto = Object.assign(Object.assign(Object.assign({ type }, commandOptions), params), { data: utils_1.Classes.classToPlain(fn) });
        if (this.moduleOptions.namespace && dto.type.split(".").length == 1 && !dto.routingKey) {
            dto.type = `${this.moduleOptions.namespace}.${dto.type}`;
        }
        return dto;
    }
    create(klass, ...runtimeArgs) {
        let instance = this.injector.wire(klass, runtimeArgs);
        return instance;
    }
}
(0, tslib_1.__decorate)([
    (0, inject_1.inject)(),
    (0, tslib_1.__metadata)("design:type", engine_1.App)
], BaseBus.prototype, "app", void 0);
(0, tslib_1.__decorate)([
    (0, inject_1.inject)(),
    (0, tslib_1.__metadata)("design:type", Object)
], BaseBus.prototype, "moduleOptions", void 0);
(0, tslib_1.__decorate)([
    (0, inject_1.inject)(),
    (0, tslib_1.__metadata)("design:type", inject_1.Injector)
], BaseBus.prototype, "injector", void 0);
(0, tslib_1.__decorate)([
    (0, inject_1.inject)(),
    (0, tslib_1.__metadata)("design:type", engine_1.Discovery)
], BaseBus.prototype, "discovery", void 0);
(0, tslib_1.__decorate)([
    (0, inject_1.inject)(),
    (0, tslib_1.__metadata)("design:type", logger_1.Logger)
], BaseBus.prototype, "logger", void 0);
(0, tslib_1.__decorate)([
    (0, inject_1.inject)(),
    (0, tslib_1.__metadata)("design:type", bus_1.BusProvider)
], BaseBus.prototype, "busProvider", void 0);
(0, tslib_1.__decorate)([
    (0, inject_1.init)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], BaseBus.prototype, "initialize", null);
exports.BaseBus = BaseBus;
//# sourceMappingURL=baseBus.js.map