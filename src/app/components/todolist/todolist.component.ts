import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  taskArray = [
    {"name": "Task 1", "description": "My First Task", "dueDate": "2024-04-15", "status": "Pending", "priority": "Low"},
    {"name": "Task 2", "description": "My Second Task", "dueDate": "2024-04-15", "status": "Completed", "priority": "High"}
  ];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.taskArray = this.dataService.getList();
  }

  onAdd(form: NgForm) {
    if (!form.valid) {
      return; // Ensures all required fields are filled
    }

    let newTask = form.value; // form.value already contains the data input by the user
    newTask['status'] = "Pending"; // Assigning a default status when creating a new task

    this.taskArray.push(newTask); // Push the new task to the task array
    this.dataService.setList(this.taskArray); // Update the data service
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
    this.dataService.setList(this.taskArray);
  }

  onChangeStatus(index: number) {
    this.taskArray[index]["status"] = this.taskArray[index]["status"] === "Pending" ? "Completed" : "Pending";
    this.dataService.setList(this.taskArray);
  }

  navetotask(i: number) {
    this.router.navigate(['/task', i]);
  }
}
