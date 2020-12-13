"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBus = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const baseBus_1 = require("../base/baseBus");
const decorators_1 = require("../decorators/decorators");
let QueryBus = class QueryBus extends baseBus_1.BaseBus {
    constructor() {
        super(...arguments);
        this.Symbol = decorators_1.QueryHandlerSymbol;
        // protected async _callHandler(define: Define, propertyKey: string, args: { guid: string, command: Command }) {
        //
        //     try {
        //         let instance = this.injector.parent.get(define.id);
        //
        //         let result = await instance[propertyKey](args.command);
        //
        //         this._dispatcher.fireEvent(this.QueryResultSymbol, {guid: args.guid, result, status: true})
        //
        //     } catch (e) {
        //         this._dispatcher.fireEvent(this.QueryResultSymbol, {guid: args.guid, result: null, status: false, e});
        //     }
        // }
    }
    //protected readonly QueryResultSymbol = "__QueryResultSymbol__";
    query(query, options = {}) {
        return this.requestFromBus(query, options);
    }
};
QueryBus = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], QueryBus);
exports.QueryBus = QueryBus;
//# sourceMappingURL=queryBus.js.map