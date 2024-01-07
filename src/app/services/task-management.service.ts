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

  delete() {
    this.tasks = this.tasks.filter(x => !x.isActive);
    this.export();
  }

  scheduleToToday() {
    for (let i = 0; this.tasks.length - 1; i++) {
      if ((this.tasks[i].isActive) && (this.tasks[i].isToday === false)) {
        this.tasks[i].isToday = !this.tasks[i].isToday;
        this.tasks[i].isActive = false;
      }
    }
    this.export();
  }

  scheduleToTomorrow() {
    for (let i = 0; this.tasks.length - 1; i++) {
      if ((this.tasks[i].isActive) && (this.tasks[i].isToday === true)) {
        this.tasks[i].isToday = !this.tasks[i].isToday;
        this.tasks[i].isActive = false;
      }
    }
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