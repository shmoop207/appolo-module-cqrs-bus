import {Reflector, Classes} from '@appolo/utils';
import {handler, IHandlerMetadataOptions, IMessage, reply} from '@appolo/bus';
import {IClass} from '@appolo/engine';
import {Command, ICommandCtr} from "../interfaces/ICommand";
import {IHandlerMetadata, IHandlerMetaIndex, ISagaMetaIndex} from "../interfaces/IHandlerMetadata";
import {IEventCtr} from "../interfaces/IEvent";
import {IQueryCtr} from "../interfaces/IQuery";
import {plainToClass, classToPlain} from 'class-transformer';

export const CommandHandlerSymbol = "__CommandHandlerSymbol__"
export const EventHandlerSymbol = "__EventHandlerSymbol__"
export const QueryHandlerSymbol = "__QueryHandlerSymbol__"
export const SagaSymbol = "__SagaHandlerSymbol__"

export function defineClassHandler(target: any, opts: { fn?: IClass, type?: string } & IHandlerMetadataOptions, symbol: string) {
    Reflector.setMetadata(symbol, opts, target);
}

export function defineHandler(opts: { fn?: IClass, type?: string } & IHandlerMetadataOptions, symbol: string) {
    return function (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) {

        if (!propertyKey) {
            defineClassHandler(target, opts, symbol);
            return;
        }

        let data = Reflector.getFnMetadata<IHandlerMetaIndex>(symbol, target.constructor, {});

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
            throw  new Error("failed to find handle fn");
        }

        let busOptions = Reflector.getFnMetadata<IHandlerMetadataOptions>(symbol, opts.fn);

        if (!opts.type) {
            opts.type = opts.fn.name;
        }

        opts = {...opts, ...busOptions};

        data[propertyKey].events.push(
            {eventName: opts.type as string, options: opts || {}});

        if (!opts.type) {
            throw  new Error("failed to find type name");
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
    }
}

export function command(opts: { fn?: ICommandCtr, type?: string } & IHandlerMetadataOptions = {}) {
    return defineHandler(opts, CommandHandlerSymbol)
}

export function event(opts: { fn?: IEventCtr, type?: string } & IHandlerMetadataOptions = {}) {
    return defineHandler(opts, EventHandlerSymbol)
}

export function query(opts: { fn?: IQueryCtr, type?: string } & IHandlerMetadataOptions = {}) {
    return defineHandler(opts, QueryHandlerSymbol)
}

// export function saga(events: (string | IEventCtr)[], identifier?: (event: Event) => boolean) {
//     return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
//         let data = Reflector.getFnMetadata<ISagaMetaIndex>(SagaSymbol, target.constructor, {})
//
//         if (!data[propertyKey]) {
//             data[propertyKey] = {
//                 items: [],
//                 propertyKey,
//                 descriptor
//             };
//         }
//
//         events = events.map(event => typeof event == "string" ? event : Classes.className(event as Function))
//
//         data[propertyKey].items.push({events: events as string[], identifier})
//     };
// }


