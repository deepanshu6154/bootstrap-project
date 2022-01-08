import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list: any[] = [];
  
  addTask(task:string){
    this.list.push({id:this.list.length,name:task});
    
  }

  removeTask(id:number){
    console.log(id);
    this.list = this.list.filter(item=>item.id!==id)
  }


  
}
