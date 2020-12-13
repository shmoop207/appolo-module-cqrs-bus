import {BusProvider, IHandlerMetadataOptions, IPublishProviderOptions} from "@appolo/bus";

export interface IHandlerMetaIndex {
    [index: string]: IHandlerMetadata
}

export interface IHandlerMetadata {

    events: { eventName: string, options?: { type?: string, fn?: any } & IHandlerMetadataOptions }[]
    propertyKey: string,
    descriptor: PropertyDescriptor
}


export interface ISagaMetaIndex {
    [index: string]: ISagaMetadata
}

export interface ISagaMetadata {

    items: { events: string[], identifier?: (event: Event) => boolean }[]
    propertyKey: string,
    descriptor: PropertyDescriptor
}
