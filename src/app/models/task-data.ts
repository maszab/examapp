import { Guid } from "guid-typescript";

export class TaskData {
    /*id is not used in this version yet. It was implemented to suppoort later extensions with e.g. realtime database functions*/
    id: string = Guid.create().toString();
    task: string = "";
    isToday: boolean = true;
    isActive: boolean = false;
}
