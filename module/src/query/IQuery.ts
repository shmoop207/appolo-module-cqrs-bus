import {lazy} from "@appolo/inject/index";
import {CommandsBus} from "../commands/commandsBus";
import {QueryBus} from "./queryBus";
import {IPublishProviderOptions} from "@appolo/bus/index";

export abstract class Query {

}


export interface IQueryCtr {
    new(...rest: any[]): Query
}


