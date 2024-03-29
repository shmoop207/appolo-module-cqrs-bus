"use strict";
var CqrsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CqrsModule = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const inject_1 = require("@appolo/inject");
const index_1 = require("../index");
const queryBus_1 = require("./src/query/queryBus");
const decorators_1 = require("./src/decorators/decorators");
const bus_1 = require("@appolo/bus");
const utils_1 = require("@appolo/utils");
let CqrsModule = CqrsModule_1 = class CqrsModule extends engine_1.Module {
    constructor() {
        super(...arguments);
        this.Defaults = {
            commandsBusId: "commandsBus",
            eventsBusId: "eventsBus",
            queryBusId: "queryBus",
            namespace: ""
        };
    }
    static for(options) {
        return { type: CqrsModule_1, options };
    }
    get exports() {
        return [
            { id: this.moduleOptions.commandsBusId, type: index_1.CommandsBus },
            { id: this.moduleOptions.eventsBusId, type: index_1.EventsBus },
            { id: this.moduleOptions.queryBusId, type: queryBus_1.QueryBus }
        ];
    }
    beforeModuleInitialize() {
        this._handleExportedItem(decorators_1.CommandHandlerSymbol, bus_1.handler);
        this._handleExportedItem(decorators_1.EventHandlerSymbol, bus_1.handler);
        this._handleExportedItem(decorators_1.QueryHandlerSymbol, bus_1.reply);
    }
    _handleExportedItem(symbol, fn) {
        let items = this._app.tree.parent.discovery.findAllReflectData(symbol);
        items.forEach(item => {
            let props = Object.keys(item.metaData || {});
            props.forEach(key => {
                let prop = item.metaData[key];
                if (!prop.propertyKey) {
                    return;
                }
                prop.events.forEach(event => {
                    if (this.moduleOptions.namespace && event.options.type.split(".").length == 1 && !event.options.routingKey) {
                        event.options.type = `${this.moduleOptions.namespace}.${event.options.type}`;
                    }
                    fn(event.options.type, event.options)(item.fn.prototype, prop.propertyKey, prop.descriptor);
                    let old = item.fn.prototype[prop.propertyKey];
                    let $this = this;
                    item.fn.prototype[prop.propertyKey] = async function (msg) {
                        try {
                            let instance;
                            if (!!$this._app.injector.getDefinition(event.options.fn)) {
                                instance = $this._app.injector.get(event.options.fn);
                                instance = utils_1.Classes.plainToClassInstance(instance, msg.body);
                            }
                            else {
                                instance = utils_1.Classes.plainToClass(event.options.fn, msg.body);
                            }
                            let result = await old.call(this, instance, msg);
                            return result;
                        }
                        catch (e) {
                            $this.logger.error(`failed to run handler ${item.fn.name} ${prop.propertyKey}`, {
                                e,
                                body: msg.body
                            });
                            throw e;
                        }
                    };
                });
            });
        });
    }
};
tslib_1.__decorate([
    (0, inject_1.inject)(),
    tslib_1.__metadata("design:type", Object)
], CqrsModule.prototype, "logger", void 0);
CqrsModule = CqrsModule_1 = tslib_1.__decorate([
    (0, engine_1.module)()
], CqrsModule);
exports.CqrsModule = CqrsModule;
//# sourceMappingURL=cqrsModule.js.map