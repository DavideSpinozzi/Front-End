import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];

  constructor() {}

  getTasks(): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.todos);
      }, 2000);
    });
  }

  addTask(task: Todo): void {
    this.todos.push(task);
  }

  deleteTask(task: Todo): void {
    const index = this.todos.indexOf(task);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  togliMessaggioDelay(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
}
