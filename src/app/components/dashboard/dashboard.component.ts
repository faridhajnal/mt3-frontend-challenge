import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { Todo, TodoStatus } from '../../data/todo';
import { TodosService } from '../../data/todo.service';
import { CreateTodoDialogComponent } from '../create-todo/create-todo.dialog.component';

@Component({
  selector: 'mt3-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [TodosService]
})
export class DashboardComponent {

  //todos$: Observable<Todo[]>
  todosSub: Subscription
  activeTodos: Todo[] = []
  activeTodosCount$: Observable<number>
  doneTodosCount$: Observable<number>
  constructor(private dialog: MatDialog, private todosService: TodosService) {
    //this.todos$ = todosService.todos.asObservable()
    this.todosSub = todosService.todos.subscribe(todos => {
      this.activeTodos = todos.filter(t => t.status === TodoStatus.Active)
    })
    this.activeTodosCount$ = todosService.activeTodosCount.asObservable()
    this.doneTodosCount$ = todosService.doneTodosCount.asObservable()
  }

  openCreateDialog() {
    this.dialog.open(CreateTodoDialogComponent).afterClosed().subscribe((result: Todo) => {
      if(result) {
        console.log(result)
        this.todosService.addTodo(result)
      }
    })
  }

  updateTodoStatus(id: number) {
    if(id) this.todosService.markTodoAsDone(id)
  }

  deleteTodo(id: number) {
    if(id) this.todosService.deleteTodo(id)
  }
}
