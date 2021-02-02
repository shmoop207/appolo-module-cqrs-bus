import {define, singleton, inject, init, Define, Injector} from '@appolo/inject'
import { EventHandlerSymbol} from "../decorators/decorators";
import {BaseBus} from "../base/baseBus";
import {Event} from "./IEvent";
import {IPublishProviderOptions} from "@appolo/bus/index";

@define()
@singleton()
export class EventsBus extends BaseBus {

    protected readonly Symbol = EventHandlerSymbol;

    public publish(event: Event, options: Partial<IPublishProviderOptions> = {}): Promise<void> {

        return this.publishToBus(event, options);
    }


}
