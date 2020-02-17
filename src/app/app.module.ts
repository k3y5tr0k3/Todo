import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoService } from './services/todo.service';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
