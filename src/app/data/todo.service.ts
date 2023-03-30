import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo, TodoStatus } from "./todo";

@Injectable()
export class TodosService {

    todos!: BehaviorSubject<Todo[]>
    activeTodosCount!: BehaviorSubject<number>
    doneTodosCount!: BehaviorSubject<number>
    latestId = 0

    constructor() {
        this.todos = new BehaviorSubject<Todo[]>([])
        this.activeTodosCount = new BehaviorSubject<number>(0)
        this.doneTodosCount = new BehaviorSubject<number>(0)
    }

    addTodo(todo: Todo) {
        let currentTodos = [...this.todos.value]
        const todoText = currentTodos.find(t => t.text === todo.text)
        if(todoText) {
            console.log('There is already a TODO with the provided text description')
            return
        }
        let activeTodosCount = this.activeTodosCount.value
        currentTodos.push({...todo, id: ++this.latestId})
        this.todos.next(currentTodos)
        this.activeTodosCount.next(++activeTodosCount)
        console.log(this.todos.value)
    }

    markTodoAsDone(id: number) {
        this.updateTodoList(id, TodoStatus.Done)
        let activeTodosCount = this.activeTodosCount.value
        let doneTodosCount = this.doneTodosCount.value
        this.activeTodosCount.next(--activeTodosCount)
        this.doneTodosCount.next(++doneTodosCount)
    }

    deleteTodo(id: number) {
        this.updateTodoList(id, TodoStatus.Deleted)
        let activeTodosCount = this.activeTodosCount.value
        this.activeTodosCount.next(--activeTodosCount)
    }

    private updateTodoList(id: number, todoStatus: TodoStatus) {
        let currentTodos = [...this.todos.value]
        let targetTodo = currentTodos.find(t => t.id === id)
        let targetTodoIndex = currentTodos.findIndex(t => t.id === id)
        if(targetTodo) {
            targetTodo = {
                ...targetTodo,
                status: todoStatus
            }
            currentTodos[targetTodoIndex] = targetTodo
            this.todos.next(currentTodos)   
        }
    }

}