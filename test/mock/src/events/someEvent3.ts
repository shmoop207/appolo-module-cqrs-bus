import {event} from "../../../../module/src/decorators/decorators";

@event()
export class SomeEvent3 {
    constructor(public name:string) {
    }
}
