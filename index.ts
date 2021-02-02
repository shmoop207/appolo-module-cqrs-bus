"use strict";
import {CqrsModule} from "./module/cqrsModule";
import {command, query, event} from "./module/src/decorators/decorators"
import {CommandsBus} from "./module/src/commands/commandsBus"
import {BaseCommand} from "./module/src/interfaces/ICommand"
import {BaseEvent} from "./module/src/interfaces/IEvent"
import {EventsBus} from "./module/src/events/eventsBus"
import {QueryBus} from "./module/src/query/queryBus"
import {BaseQuery} from "./module/src/interfaces/IQuery"
import {IOptions} from "./module/src/interfaces/IOptions"

export {BaseGetAllDataQuery} from "./module/src/data/cqrs/queries/baseGetAllDataQuery"
export {BaseFindOneDataQuery} from "./module/src/data/cqrs/queries/baseFindOneDataQuery"

export {BaseCreateDataQuery, BaseCreateDataCommand} from "./module/src/data/cqrs/queries/baseCreateDataQuery"
export {BaseDeleteDataCommand, BaseDeleteDataQuery} from "./module/src/data/cqrs/queries/baseDeleteDataQuery"
export {BaseUpdateDataCommand, BaseUpdateDataQuery} from "./module/src/data/cqrs/queries/baseUpdateDataQuery"
export {BaseCqrsCrud} from "./module/src/data/cqrs/queries/baseCqrsCrud"
export {cqrsCrud} from "./module/src/data/cqrs/queries/cqrsCrudDecorator"


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

