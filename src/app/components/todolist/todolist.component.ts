import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  taskArray = [
    {"name": "Task 1", "description": "My First Task", "dueDate": "2024-04-10", "status": " Pending "},
    {"name": "Task 2", "description": "My Second Task", "dueDate": "2024-04-10", "status": "Completed"}
];

constructor(private dataService: DataService, private router: Router) {}

ngOnInit(): void {
  this.taskArray = this.dataService.getList();
}


onAdd(form: NgForm){
  form.form.value['status'] = " Pending ";
    let dic = form.form.value;

    if(dic['name']=="" || dic['description']=="" || dic['dueDate']=="")
        return;

    this.taskArray.push({
      "name": dic['name'],
      "description": dic["description"],
      "dueDate": dic["dueDate"],
      "status": dic["status"]
    });
    this.dataService.setList(this.taskArray);
}


onDelete(index: number){
    this.taskArray.splice(index, 1);
}

onChangeStatus(index: number){
    if(this.taskArray[index]["status"] == " Pending ")
        this.taskArray[index]["status"] = "Completed";
    else this.taskArray[index]["status"] = " Pending ";
}
navetotask(i: number){
  this.router.navigate(['/task', i]);
}

}
