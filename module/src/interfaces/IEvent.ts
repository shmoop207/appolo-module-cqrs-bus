import {lazy} from "@appolo/inject/index";
import {CommandsBus} from "../commands/commandsBus";
import {EventsBus} from "../events/eventsBus";

export abstract class Event {

}


export interface IEventCtr {
    new(...rest: any[]): Event
}


export abstract class BaseEvent<T extends { [index: string]: any }> {

    @lazy() protected eventsBus: EventsBus

    constructor(protected _params?: T) {
        this._params = _params || {} as any;
    }

    public toJSON() {
        return {...this._params}
    }

    public get params(): T {
        return this._params;
    }

    public publish() {
        return this.eventsBus.publish(this)
    }
}
