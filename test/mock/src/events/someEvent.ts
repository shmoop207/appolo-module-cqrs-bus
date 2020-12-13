import {command,event} from "../../../../module/src/decorators/decorators";

@event()
export class SomeEvent {
    constructor(public name:string) {
    }
}
