import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private list: any[] = [];
  constructor() { }

  getList() {
    return this.list;
  }

  getTask(id: number){
    return this.list[id];
  }

  setList(newList: any[]) {
    this.list = newList;
  }


  editTask(id: number, task: any){
    this.list[id]= task
  }

}
