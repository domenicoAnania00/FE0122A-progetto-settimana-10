import { Component, OnInit } from '@angular/core';
import { TodoInterface } from 'src/app/interface/todo-interface';
import { get, add, update } from '../../service/service.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos:TodoInterface[] = [];
  newTask!:any;
  scompare:boolean = false;


  constructor() {

   }

   ngOnInit(): void {
    get().then(value => {
      this.todos = value.filter(param => param.completed == false)
      this.scompare = true;
    }).catch(err => {
      console.log(err);
    });

  }

  aggiungiTask(){

    if(this.newTask.trim() == ''){
      return
    }

  var obj:TodoInterface = {
    id: 0,
    title: this.newTask,
    completed: false
  }

    add(obj).then(value => {
      get().then(value => {
        this.todos = value.filter(param => param.completed == false)
      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
      console.log(err);
    });
     this.newTask = ''

  }

   inCompletati(riga:TodoInterface){

    riga.completed = true;
    update(riga, riga.id).then(value => {
      get().then(value => {
        this.todos = value.filter(param => param.completed == false)
      }).catch(err => {
        console.log(err);
      });

     }).catch(err => {
       console.log(err);
     });
    }

  }




