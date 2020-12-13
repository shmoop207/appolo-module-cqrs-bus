import {define, singleton, inject, init, Define, Injector} from '@appolo/inject'
import {EventDispatcher, IEventOptions} from '@appolo/events'
import {App, Discovery} from '@appolo/engine'
import {Classes, Guid} from '@appolo/utils'
import {BaseBus} from "../base/baseBus";
import {QueryHandlerSymbol} from "../decorators/decorators";
import {IQueryCtr, Query} from "../interfaces/IQuery";
import {Command} from "../interfaces/ICommand";
import {IHandlerMetadata, IHandlerMetaIndex} from "../interfaces/IHandlerMetadata";
import {IPublishProviderOptions} from "@appolo/bus/index";

@define()
@singleton()
export class QueryBus extends BaseBus {

    protected readonly Symbol = QueryHandlerSymbol;

    //protected readonly QueryResultSymbol = "__QueryResultSymbol__";


    public  query<T>(query: Query, options: Partial<IPublishProviderOptions> = {}): Promise<T> {

        return this.requestFromBus(query, options)
    }


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
