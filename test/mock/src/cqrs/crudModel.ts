import {BaseCqrsCrud, crudQueryModel, crudQuery} from "../../../../index";
import {define} from "@appolo/inject";

@crudQueryModel("Test.Curd.Model")
export class CrudModel extends BaseCqrsCrud<{ name: string }> {

}

@define()
@crudQuery(CrudModel)
export class CrudModelManager {
    public getAll(options: any) {
        return {results: [{name: options.filter.name ? "aaa" : "bbb"}]}
    }
}
