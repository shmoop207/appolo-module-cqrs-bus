import {App, createApp} from '@appolo/engine'
import {BaseCqrsCrud, CqrsModule, QueryBus} from '../../index'
import {BusModule} from '@appolo/bus'
import {Manager} from "../mock/src/manager/manager";
import {Promises} from "@appolo/utils";
import {CrudModel} from "../mock/src/cqrs/crudModel";

let should = require('chai').should();


describe("CQRS module Spec", function () {

    let app: App;

    beforeEach(async () => {

        app = createApp({root: process.cwd() + '/test/mock/', environment: "production"});

        app.module.use(BusModule.for({
            queue: "bus-test",
            requestQueue: "bus-test-request",
            replyQueue: "bus-test-reply",
            connection: process.env.RABBIT,
            exchange: "vidazoo"
        }));

        await app.module.use(CqrsModule.for({namespace: "Test"}));

        await app.launch();

    });

    afterEach(async () => {
        await app.reset();
    });

    it('should get data', async () => {

        await Promises.delay(1000);
        let result = await app.injector.get<Manager>(Manager).getData();
        result.should.be.eq("aabbccdd")
    });


    it.only('should get crud data', async () => {

       let bus=  app.injector.get<QueryBus>('queryBus')

        let data = await bus.create(CrudModel).getAll().filter("name",true).query();

       data.results.length.should.be.eq(1)
       data.results[0].name.should.be.eq("aaa")
    });

});

