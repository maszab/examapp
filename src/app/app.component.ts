import { Component } from '@angular/core';
import { TaskData } from './models/task-data';
import { TaskManagementService } from './services/task-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  actual: TaskData = new TaskData();
  constructor(public service: TaskManagementService) {
  }

  create() {
    this.service.create(this.actual);
    this.actual = new TaskData();
  }

  changeScheduleToday() {
    this.service.scheduleToToday();
  }

  changeScheduleTomorrow() {
    this.service.scheduleToTomorrow();
  }

  remove() {
    this.service.delete();
  }
}
