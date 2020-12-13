"use strict";
import {CqrsModule} from "./module/cqrsModule";
import {command, query, event} from "./module/src/decorators/decorators"
import {CommandsBus} from "./module/src/commands/commandsBus"
import {EventsBus} from "./module/src/events/eventsBus"
import {IOptions} from "./module/src/interfaces/IOptions"


export {CqrsModule, command, query, event, CommandsBus, EventsBus, IOptions}

