import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
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

  sortingOptions = [
    {
      value: 'MostRecent',
      viewValue: 'Most recent first'
    },
    {
      value: 'LeastRecent',
      viewValue: 'Least recent first'
    },
    {
      value: 'None',
      viewValue: 'No date sorting'
    },
  ]
  constructor(private dialog: MatDialog, private todosService: TodosService) {
    //this.todos$ = todosService.todos.asObservable()
    this.todosSub = todosService.todos.subscribe(todos => {
      this.activeTodos = todos.filter(t => t.status === TodoStatus.Active)
    })
    this.activeTodosCount$ = todosService.activeTodosCount.asObservable()
    this.doneTodosCount$ = todosService.doneTodosCount.asObservable()
  }

  sortTodosByDate(event: MatSelectChange) {
    switch(event.value) {
      case 'MostRecent':
        this.activeTodos = this.activeTodos.sort((t1, t2) => t1.dueDate > t2.dueDate ? 1 : -1)
        break
      case 'LeastRecent':
        this.activeTodos = this.activeTodos.sort((t1, t2) => t1.dueDate > t2.dueDate ? -1 : 1)
        break
      default:
        this.activeTodos = this.activeTodos.sort((t1, t2) => t1.id - t2.id)
        break
    }
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

  reorderTodos(event: number[]) {
    const [previousIndex, currentIndex] = event
    moveItemInArray(this.activeTodos, previousIndex, currentIndex)
  }
}
