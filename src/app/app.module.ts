import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { CompletatiComponent } from './components/completati/completati.component';
import { NavComponent } from './components/nav/nav.component';


const routes:Route[] = [
  {
    path:'',
    component: TodoComponent
  },
  {
    path:'completati',
    component:CompletatiComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletatiComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
