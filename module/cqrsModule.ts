import {Module, module, IModuleParams} from "@appolo/engine";
import {inject} from "@appolo/inject";
import {ILogger} from "@appolo/logger";
import {CommandsBus, EventsBus, IOptions} from "../index";
import {QueryBus} from "./src/query/queryBus";
import {CommandHandlerSymbol, EventHandlerSymbol, QueryHandlerSymbol} from "./src/decorators/decorators";
import {IHandlerMetadata} from "./src/interfaces/IHandlerMetadata";
import {handler, IHandlerMetadataOptions, IMessage, reply} from '@appolo/bus';
import {IExported} from "@appolo/engine/lib/modules/interfaces/IModule";
import {Classes} from "@appolo/utils";

@module()
export class CqrsModule extends Module<IOptions> {

    protected readonly Defaults: Partial<IOptions> = {
        commandsBusId: "commandsBus",
        eventsBusId: "eventsBus",
        queryBusId: "queryBus",
        namespace: ""
    };

    @inject() private logger: ILogger

    public static for(options: IOptions): IModuleParams {
        return {type: CqrsModule, options}
    }

    public get exports() {
        return [
            {id: this.moduleOptions.commandsBusId, type: CommandsBus},
            {id: this.moduleOptions.eventsBusId, type: EventsBus},
            {id: this.moduleOptions.queryBusId, type: QueryBus}
        ];
    }

    public beforeModuleInitialize(): any {


        this._handleExportedItem(CommandHandlerSymbol, handler)
        this._handleExportedItem(EventHandlerSymbol, handler)
        this._handleExportedItem(QueryHandlerSymbol, reply)

    }


    private _handleExportedItem(symbol: string, fn: any) {

        let items = this._app.tree.parent.discovery.findAllReflectData<IHandlerMetadata>(symbol)


        items.forEach(item => {

            let props = Object.keys(item.metaData || {});

            props.forEach(key => {

                let prop: IHandlerMetadata = item.metaData[key];
                if (!prop.propertyKey) {
                    return
                }

                prop.events.forEach(event => {
                    if (this.moduleOptions.namespace && event.options.type.split(".").length == 1 && !event.options.routingKey) {
                        event.options.type = `${this.moduleOptions.namespace}.${event.options.type}`;
                    }

                    fn(event.options.type, event.options)(item.fn.prototype, prop.propertyKey, prop.descriptor)
                    let old = item.fn.prototype[prop.propertyKey];

                    let $this = this;
                    item.fn.prototype[prop.propertyKey] = async function (msg: IMessage<any>) {

                        try {
                            let instance;

                            if (!!$this._app.injector.getDefinition(event.options.fn)) {
                                instance = $this._app.injector.get(event.options.fn);
                                instance = Classes.plainToClassInstance(instance, msg.body)
                            } else {
                                instance = Classes.plainToClass(event.options.fn, msg.body);
                            }

                            let result = await old.call(this, instance, msg);

                            return result;

                        } catch (e) {

                            $this.logger.error(`failed to run handler ${item.fn.name} ${prop.propertyKey}`, {
                                e,
                                body: msg.body
                            })

                            throw e;
                        }


                    }
                })
            })

        })
    }

}
