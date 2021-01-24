import {App, createApp} from '@appolo/engine'
import {CqrsModule} from '../../index'
import {BusModule} from '@appolo/bus'
import {Manager} from "../mock/src/manager/manager";
import {Promises} from "@appolo/utils";

let should = require('chai').should();


describe("CQRS module Spec", function () {

    let app: App;

    beforeEach(async () => {

        app = createApp({root: process.cwd() + '/test/mock/', environment: "production"});

         app.module.use( BusModule.for({
            queue: "bus-test",
            requestQueue: "bus-test-request",
            replyQueue: "bus-test-reply",
            connection: process.env.RABBIT,
            exchange: "vidazoo"
        }));

        await app.module.use(CqrsModule.for({namespace:"Test"}));

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

});

