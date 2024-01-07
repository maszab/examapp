import { Injectable } from '@angular/core';
import { TaskData } from '../models/task-data';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  tasks: TaskData[] = [];


  constructor() {
    this.import();
  }


  create(t: TaskData) {
    this.tasks.push(t);

    this.export();
  }

  delete(id: string) {
    this.tasks = this.tasks.filter(x => x.id != id);
    this.export();
  }

  import() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') ?? '[]');
    this.tasks = this.tasks.map(x => Object.assign(new TaskData(), x));
  }

  export() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }


}