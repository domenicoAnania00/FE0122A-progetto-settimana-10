import { Component, OnInit } from '@angular/core';
import { TodoInterface } from 'src/app/interface/todo-interface';
import { get} from '../../service/service.service'

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  completati:TodoInterface[] = [];
  scomparso = false;
  constructor() { }

  ngOnInit(): void {
    get().then(value => {
      this.completati = value.filter(param => param.completed == true)
      this.scomparso = true;
    }).catch(err => {
      console.log(err);
    });

  }


}


