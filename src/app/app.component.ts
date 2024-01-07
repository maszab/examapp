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
    // this.actual.category = service.getCategories()[0];
  }

  create() {
    this.service.create(this.actual);
  }
}
