import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Todo, TodoPriority, TodoStatus } from '../../data/todo';

@Component({
  selector: 'mt3-create-todo.dialog',
  templateUrl: './create-todo.dialog.component.html',
  styleUrls: ['./create-todo.dialog.component.scss']
})
export class CreateTodoDialogComponent {
  todoForm!: FormGroup
  todoPriorities = Object.values(TodoPriority)
  currentDate = new Date()

  constructor(private dialogRef: MatDialogRef<CreateTodoDialogComponent>, private readonly fb: FormBuilder) {
    this.todoForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(5)]],
      priority: [TodoPriority.Low, [Validators.required]],
      dueDate: ['', [Validators.required]]
    })
  }

  onAttemptCreate() {
    console.log(this.todoForm.value)
    const todo: Partial<Todo> = {
      text: this.todoForm.value.text,
      priority: this.todoForm.value.priority,
      status: TodoStatus.Active,
      dueDate: this.todoForm.value.dueDate
    }
    this.dialogRef.close(
      todo
    )
  }
}
