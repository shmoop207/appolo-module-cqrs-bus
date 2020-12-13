import {define, singleton, inject, init, Define, Injector} from '@appolo/inject'
import {CommandHandlerSymbol} from "../decorators/decorators";
import {BaseBus} from "../base/baseBus";
import {Reflector} from "@appolo/utils";
import {Command, ICommandCtr} from "../interfaces/ICommand";
import {Classes} from "@appolo/utils/index";
import {IEventOptions} from "@appolo/events/index";
import {IPublishProviderOptions, IHandlerMetadataOptions} from "@appolo/bus";

@define()
@singleton()
export class CommandsBus extends BaseBus {


    protected readonly Symbol = CommandHandlerSymbol

    public execute(command: Command, options: Partial<IPublishProviderOptions> = {}): Promise<void> {

        return this.publishToBus(command, options);
    }

}
