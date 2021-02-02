"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.event = exports.command = exports.defineHandler = exports.defineClassHandler = exports.SagaSymbol = exports.QueryHandlerSymbol = exports.EventHandlerSymbol = exports.CommandHandlerSymbol = void 0;
const utils_1 = require("@appolo/utils");
exports.CommandHandlerSymbol = "__CommandHandlerSymbol__";
exports.EventHandlerSymbol = "__EventHandlerSymbol__";
exports.QueryHandlerSymbol = "__QueryHandlerSymbol__";
exports.SagaSymbol = "__SagaHandlerSymbol__";
function defineClassHandler(target, opts, symbol) {
    utils_1.Reflector.setMetadata(symbol, opts, target);
}
exports.defineClassHandler = defineClassHandler;
function defineHandler(opts, symbol) {
    return function (target, propertyKey, descriptor) {
        if (!propertyKey) {
            defineClassHandler(target, opts, symbol);
            return;
        }
        let data = utils_1.Reflector.getFnMetadata(symbol, target.constructor, {});
        if (!opts.fn) {
            let paramTypes = Reflect.getMetadata("design:paramtypes", target, propertyKey);
            if (paramTypes && paramTypes.length) {
                opts.fn = paramTypes[0];
            }
        }
        if (!data[propertyKey]) {
            data[propertyKey] = {
                events: [],
                propertyKey,
                descriptor
            };
        }
        if (!opts.fn) {
            throw new Error("failed to find handle fn");
        }
        let busOptions = utils_1.Reflector.getFnMetadata(symbol, opts.fn);
        if (!opts.type) {
            opts.type = opts.fn.name;
        }
        opts = Object.assign(Object.assign({}, opts), busOptions);
        data[propertyKey].events.push({ eventName: opts.type, options: opts || {} });
        if (!opts.type) {
            throw new Error("failed to find type name");
        }
        // if (symbol === CommandHandlerSymbol || symbol === EventHandlerSymbol) {
        //     handler(opts.type, opts)(target, propertyKey, descriptor)
        // }
        // else if (symbol === QueryHandlerSymbol) {
        //     reply(opts.type, opts)(target, propertyKey, descriptor)
        // }
        // let old = descriptor.value;
        //
        // descriptor.value = function (msg: IMessage<any>) {
        //     return old.call(this, plainToClass(opts.fn, msg.body))
        // }
    };
}
exports.defineHandler = defineHandler;
function command(opts = {}) {
    return defineHandler(opts, exports.CommandHandlerSymbol);
}
exports.command = command;
function event(opts = {}) {
    return defineHandler(opts, exports.EventHandlerSymbol);
}
exports.event = event;
function query(opts = {}) {
    return defineHandler(opts, exports.QueryHandlerSymbol);
}
exports.query = query;
//# sourceMappingURL=decorators.js.map