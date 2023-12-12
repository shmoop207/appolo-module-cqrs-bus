import {define, singleton, inject, init, Define, Injector,lazy} from '@appolo/inject'
import {App, Discovery} from '@appolo/engine'
import {Logger} from "@appolo/logger";
import {BusProvider, IHandlerMetadataOptions, IPublishProviderOptions} from "@appolo/bus";
import {IOptions} from "../interfaces/IOptions";
import {IQueryCtr, Query} from "../query/IQuery";
import {Event, IEventCtr} from "../events/IEvent";
import {Reflector, Classes} from "@appolo/utils";
import {Command} from "../commands/ICommand";


export abstract class BaseBus {

    @inject() protected app: App;
    @inject() protected moduleOptions: IOptions;
    @inject() protected injector: Injector;
    @inject() protected discovery: Discovery;
    @inject() protected logger: Logger;
    @lazy() protected busProvider: BusProvider;


    protected abstract readonly Symbol: string

    @init()
    protected initialize() {

    }

    protected publishToBus(fn: Command | Query | Event, params: Partial<IPublishProviderOptions>): Promise<void> {

        let dto = this._getBusParams(params, fn);

        return this.busProvider.publish(dto)
    }

    protected requestFromBus<T>(fn: Command | Query | Event, params: Partial<IPublishProviderOptions>): Promise<T> {

        let dto = this._getBusParams(params, fn);

        return this.busProvider.request<T>(dto)
    }

    private _getBusParams(params: Partial<IPublishProviderOptions>, fn: Command | Query | Event): IPublishProviderOptions {
        let type = fn.constructor.name

        let commandOptions = Reflector.getFnMetadata<IHandlerMetadataOptions>(this.Symbol, fn.constructor);

        let dto = {type, ...commandOptions, ...params, data: Classes.classToPlain(fn)}

        if (this.moduleOptions.namespace && dto.type.split(".").length == 1 && !dto.routingKey) {
            dto.type = `${this.moduleOptions.namespace}.${dto.type}`;
        }

        return dto;
    }

    public create<T extends new (...args: any) => any>(klass: T, ...runtimeArgs: ConstructorParameters<T>): InstanceType<T> {
        let instance = this.injector.wire(klass, runtimeArgs);

        return instance;
    }

}
