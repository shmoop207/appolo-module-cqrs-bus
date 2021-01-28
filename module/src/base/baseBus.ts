import {define, singleton, inject, init, Define, Injector} from '@appolo/inject'
import {EventDispatcher, IEventOptions} from '@appolo/events'
import {App, Discovery} from '@appolo/engine'
import {Command, ICommandCtr} from "../interfaces/ICommand";
import {Logger} from "@appolo/logger";
import {IHandlerMetadata, IHandlerMetaIndex} from "../interfaces/IHandlerMetadata";
import {BusProvider, IHandlerMetadataOptions, IPublishProviderOptions} from "@appolo/bus";
import {IOptions} from "../interfaces/IOptions";
import {IQueryCtr, Query} from "../interfaces/IQuery";
import {Event, IEventCtr} from "../interfaces/IEvent";
import {Reflector, Classes} from "@appolo/utils";


export abstract class BaseBus {

    @inject() protected app: App;
    @inject() protected moduleOptions: IOptions;
    @inject() protected injector: Injector;
    @inject() protected discovery: Discovery;
    @inject() protected logger: Logger;
    @inject() protected busProvider: BusProvider;


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
