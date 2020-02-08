import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent} from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';


const routes: Routes = [
  { path: 'add', component: TodoAddComponent },
  { path: 'list', component: TodoListComponent },
  { path: 'item/:id', component: TodoListItemComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
