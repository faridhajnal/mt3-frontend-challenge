import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../data/todo';

@Component({
  selector: 'mt3-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() todo!: Todo
  @Output() updateTodoStatus = new EventEmitter<number>()
  @Output() deleteTodo = new EventEmitter<number>()
  isAlmostDue = false

  ngOnInit() {
    // we all love JS dates don't we?
    const currentDate = new Date()
    const tomorrowDate = new Date()
    tomorrowDate.setDate(tomorrowDate.getDate() + 1)
    if(currentDate.toDateString() === this.todo.dueDate.toDateString() || 
      tomorrowDate.toDateString() === this.todo.dueDate.toDateString()) {
        this.isAlmostDue = true
    }
  }

  onMarkAsCompleted(id: number) {
    this.updateTodoStatus.emit(id)
  }

  onDelete(id: number) {
    this.deleteTodo.emit(id)
  }
}
