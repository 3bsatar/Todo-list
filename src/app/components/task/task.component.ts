import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task_id: any;
  task: any;

  constructor (private route: ActivatedRoute, private dataService: DataService, private router: Router){}

  ngOnInit(): void{
    this.task_id = this.route.snapshot.paramMap.get('id');
    this.task = this.dataService.getTask(this.task_id);
    console.log(this.task);
  }

  onEdit(){
    this.dataService.editTask(this.task_id, this.task);
    this.router.navigate(['/']);
  }
}
