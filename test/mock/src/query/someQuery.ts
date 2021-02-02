import {query} from "../../../../module/src/decorators/decorators";
import {define} from "@appolo/inject";
import {BaseQuery} from "../../../../index";

@query()
@define()
export class SomeQuery extends BaseQuery<any, string> {

}
