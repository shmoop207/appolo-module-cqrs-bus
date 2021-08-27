"use strict";
import {CqrsModule} from "./module/cqrsModule";
import {command, query, event} from "./module/src/decorators/decorators"
import {CommandsBus} from "./module/src/commands/commandsBus"
import {BaseCommand} from "./module/src/commands/baseCommand"
import {BaseEvent} from "./module/src/events/baseEvent"
import {EventsBus} from "./module/src/events/eventsBus"
import {QueryBus} from "./module/src/query/queryBus"
import {BaseQuery} from "./module/src/query/baseQuery"
import {IOptions} from "./module/src/interfaces/IOptions"

export {BaseGetAllDataQuery} from "./module/src/data/cqrs/queries/baseGetAllDataQuery"
export {BaseFindOneDataQuery} from "./module/src/data/cqrs/queries/baseFindOneDataQuery"

export {BaseCreateDataQuery, BaseCreateDataCommand} from "./module/src/data/cqrs/queries/baseCreateDataQuery"
export {BaseDeleteDataCommand, BaseDeleteDataQuery} from "./module/src/data/cqrs/queries/baseDeleteDataQuery"
export {BaseUpdateDataCommand, BaseUpdateDataQuery} from "./module/src/data/cqrs/queries/baseUpdateDataQuery"
export {BaseCqrsCrud} from "./module/src/data/cqrs/queries/baseCqrsCrud"
export {crudQuery, crudQueryModel} from "./module/src/data/cqrs/queries/cqrsCrudDecorator"

export type ParamsCommand<P> = P extends BaseCommand<infer T> ? T : never;
export type ParamsEvent<P> = P extends BaseEvent<infer T> ? T : never;
export type ParamsQuery<P> = P extends BaseQuery<infer T, any> ? T : never;
export type ResultQuery<P> = P extends BaseQuery<any, infer T> ? T : never;


export {
    CqrsModule,
    command,
    query,
    event,
    CommandsBus,
    EventsBus,
    IOptions,
    QueryBus,
    BaseCommand,
    BaseEvent,
    BaseQuery
}

