import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../data/todo';

@Component({
  selector: 'mt3-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent {
  @Input() todos!: Todo[] | null
  @Output() updateTodoStatus = new EventEmitter<number>()
  @Output() deleteTodo = new EventEmitter<number>()
  @Output() todoCardDropped = new EventEmitter<[number, number]>()

  drop(event: CdkDragDrop<Todo[]>) {
    this.todoCardDropped.emit([event.previousIndex, event.currentIndex])
  }
}
