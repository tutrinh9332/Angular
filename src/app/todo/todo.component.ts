import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Todo} from "../todo";

let _id=1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
todos: Todo[]=[];
content=new FormControl();


toggleTodo(i:number){
  this.todos[i].complete=!this.todos[i].complete;
}

change(){
  const value=this.content.value;
  if (value){
    const todo: Todo={
      id: _id++,
      content: value,
      complete:false
    };
    this.todos.push(todo);
    this.content.reset();
  }
}
}