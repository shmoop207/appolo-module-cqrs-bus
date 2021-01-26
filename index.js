"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBus = exports.EventsBus = exports.CommandsBus = exports.event = exports.query = exports.command = exports.CqrsModule = void 0;
const cqrsModule_1 = require("./module/cqrsModule");
Object.defineProperty(exports, "CqrsModule", { enumerable: true, get: function () { return cqrsModule_1.CqrsModule; } });
const decorators_1 = require("./module/src/decorators/decorators");
Object.defineProperty(exports, "command", { enumerable: true, get: function () { return decorators_1.command; } });
Object.defineProperty(exports, "query", { enumerable: true, get: function () { return decorators_1.query; } });
Object.defineProperty(exports, "event", { enumerable: true, get: function () { return decorators_1.event; } });
const commandsBus_1 = require("./module/src/commands/commandsBus");
Object.defineProperty(exports, "CommandsBus", { enumerable: true, get: function () { return commandsBus_1.CommandsBus; } });
const eventsBus_1 = require("./module/src/events/eventsBus");
Object.defineProperty(exports, "EventsBus", { enumerable: true, get: function () { return eventsBus_1.EventsBus; } });
const queryBus_1 = require("./module/src/query/queryBus");
Object.defineProperty(exports, "QueryBus", { enumerable: true, get: function () { return queryBus_1.QueryBus; } });
//# sourceMappingURL=index.js.map