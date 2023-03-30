export enum TodoPriority {
    High = 'High',
    Medium = 'Medium',
    Low = 'Low'
}

export enum TodoStatus {
    Active = 'Active',
    Done = 'Done',
    Deleted = 'Deleted'
}

export interface Todo {
    id: number;
    priority: TodoPriority
    text: string
    status: TodoStatus
    dueDate: Date
}