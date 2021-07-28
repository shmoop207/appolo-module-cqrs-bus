import {lazy} from "@appolo/inject/index";
import {EventsBus} from "./eventsBus";
import {IPublishProviderOptions} from "@appolo/bus/index";

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

    public setParams(value: Partial<T>): this {
        this._params = Object.assign(this._params, value);

        return this;
    }

    public publish(options: Partial<IPublishProviderOptions> = {}) {
        return this.eventsBus.publish(this, options)
    }
}
