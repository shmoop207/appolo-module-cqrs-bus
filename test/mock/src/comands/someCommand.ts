import {command} from "../../../../index";
import {define,inject} from "@appolo/inject";
import {BusProvider} from "@appolo/bus";

@command()
@define()
export class SomeCommand {

    @inject( ) busProvider:BusProvider

    constructor(public name:string) {

    }
}
