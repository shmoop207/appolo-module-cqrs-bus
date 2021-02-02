import {lazy} from "@appolo/inject/index";
import {CommandsBus} from "../commands/commandsBus";
import {EventsBus} from "./eventsBus";
import {IPublishProviderOptions} from "@appolo/bus/index";

export abstract class Event {

}


export interface IEventCtr {
    new(...rest: any[]): Event
}


