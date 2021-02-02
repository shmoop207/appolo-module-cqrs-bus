import {IGetAllParams} from "./IGetAllParams";

export interface IBaseCrudManager<K> {
    getById(id: string, params: Pick<IGetAllParams<K>, "fields" | "populate" | "lean">): Promise<K>

    findOne(params: Pick<IGetAllParams<K>, "filter" | "fields" | "populate" | "lean">): Promise<K>

    getAll(params: IGetAllParams<Partial<K>>): Promise<{ results: K[], count: number }>

    findAll(options: Omit<IGetAllParams<Partial<K>>, "page" | "pageSize">): Promise<K[]>

    create(data: Partial<K>): Promise<K>

    updateById(id: string, data: Partial<K>): Promise<K>

    updateByIdAndSave(id: string, data: Partial<K>): Promise<K>


    deleteById(id: string, hard ?: boolean): Promise<void>


}