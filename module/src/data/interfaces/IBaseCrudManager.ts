import {ICountAllParams, IGetAllParams} from "./IGetAllParams";
import {CrudItemParams} from "../cqrs/queries/baseGetAllDataQuery";

export interface IBaseCrudManager<K> {
    getById(id: string, params: Pick<IGetAllParams<K>, "fields" | "populate" | "lean">): Promise<K>

    findOne(params: Pick<IGetAllParams<K>, "filter" | "fields" | "populate" | "lean">): Promise<K>

    getAll(params: IGetAllParams<Partial<K>>): Promise<{ results: K[], count: number }>

    countAll(params: ICountAllParams<Partial<K>>): Promise<{ count: number }>

    findAll(options: Omit<IGetAllParams<Partial<K>>, "page" | "pageSize">): Promise<K[]>

    create(data: Partial<K>): Promise<K>

    updateById(id: string, data: Partial<K>): Promise<K>

    updateByIdAndSave(id: string, data: Partial<K>): Promise<K>


    deleteById(id: string, hard ?: boolean): Promise<void>

    updateAll(query: CrudItemParams<K> | string, update: Partial<K>): Promise<void>


}
