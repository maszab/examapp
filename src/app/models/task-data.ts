import { Guid } from "guid-typescript";

export class TaskData {
    id: string = Guid.create().toString();
    task: string = "";
    isToday: boolean = true;
    isActive: boolean = false;
}
