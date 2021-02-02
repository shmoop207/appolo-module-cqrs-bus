import {CommandsBus} from "./commandsBus";
import {lazy} from "@appolo/inject";
import {IPublishProviderOptions} from "@appolo/bus/index";



export abstract class BaseCommand<T extends { [index: string]: any }> {

    @lazy() protected commandsBus: CommandsBus

    constructor(protected _params?: T) {
        this._params = _params || {} as any;
    }

    public toJSON() {
        return {...this._params}
    }

    public get params(): T {
        return this._params;
    }

    public exec(options: Partial<IPublishProviderOptions> = {}) {
        return this.commandsBus.execute(this, options)
    }
}
