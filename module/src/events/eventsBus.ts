import {define, singleton, inject, init, Define, Injector} from '@appolo/inject'
import {EventDispatcher, IEventOptions} from '@appolo/events'
import {App, Discovery} from '@appolo/engine'
import {Classes} from '@appolo/utils'
import {Command, ICommandCtr} from "../interfaces/ICommand";
import {CommandHandlerSymbol, EventHandlerSymbol} from "../decorators/decorators";
import {IHandlerMetadata, IHandlerMetaIndex} from "../interfaces/IHandlerMetadata";
import {BaseBus} from "../base/baseBus";
import {Event, IEventCtr} from "../interfaces/IEvent";
import {IPublishProviderOptions} from "@appolo/bus/index";

@define()
@singleton()
export class EventsBus extends BaseBus {

    protected readonly Symbol = EventHandlerSymbol;

    public publish(event: Event, options: Partial<IPublishProviderOptions> = {}): Promise<void> {

        return this.publishToBus(event, options);
    }


}
