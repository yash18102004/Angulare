import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './MyComponents/todos/todos.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent,TodosComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
