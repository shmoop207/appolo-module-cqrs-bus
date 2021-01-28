import {CommandsBus} from "../commands/commandsBus";
import {lazy} from "@appolo/inject";

export abstract class Command {


}


export interface ICommandCtr {
    new(...rest: any[]): Command
}


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

    public exec() {
        return this.commandsBus.execute(this)
    }
}
