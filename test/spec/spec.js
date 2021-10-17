"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_1 = require("@appolo/engine");
const index_1 = require("../../index");
const bus_1 = require("@appolo/bus");
const manager_1 = require("../mock/src/manager/manager");
const utils_1 = require("@appolo/utils");
const crudModel_1 = require("../mock/src/cqrs/crudModel");
let should = require('chai').should();
describe("CQRS module Spec", function () {
    let app;
    beforeEach(async () => {
        app = (0, engine_1.createApp)({ root: process.cwd() + '/test/mock/', environment: "production" });
        app.module.use(bus_1.BusModule.for({
            queue: "bus-test",
            requestQueue: "bus-test-request",
            replyQueue: "bus-test-reply",
            connection: process.env.RABBIT,
            exchange: "vidazoo"
        }));
        await app.module.use(index_1.CqrsModule.for({ namespace: "Test" }));
        await app.launch();
    });
    afterEach(async () => {
        await app.reset();
    });
    it('should get data', async () => {
        await utils_1.Promises.delay(1000);
        let result = await app.injector.get(manager_1.Manager).getData();
        result.should.be.eq("aabbccdd");
    });
    it.only('should get crud data', async () => {
        let bus = app.injector.get('queryBus');
        let data = await bus.create(crudModel_1.CrudModel).getAll().filter("name", true).query();
        data.results.length.should.be.eq(1);
        data.results[0].name.should.be.eq("aaa");
    });
});
//# sourceMappingURL=spec.js.map