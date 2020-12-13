import {event} from "../../../../module/src/decorators/decorators";

@event()
export class SomeEvent2 {
    constructor(public name:string) {
    }
}
