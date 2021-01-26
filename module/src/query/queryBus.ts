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

    public  query<T>(query: Query, options: Partial<IPublishProviderOptions> = {}): Promise<T> {

        return this.requestFromBus(query, options)
    }

}
