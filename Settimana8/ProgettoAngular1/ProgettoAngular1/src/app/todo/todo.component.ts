import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  template: `
    <div class="container mt-3">
      <div class="row justify-content-center">
        <div class="col-4">
          <ng-container *ngIf="showMessage">
            <p>Recupero Task...</p>
          </ng-container>
          <table class="table table-striped" *ngIf="!showMessage">
            <tbody>
              <ng-container *ngIf="TaskIncomplete(); else noTasks">
                <tr *ngFor="let todo of todos">
                  <ng-container *ngIf="!todo.completed">
                    <th scope="row">{{ todo.id }}</th>
                    <td>{{ todo.title }}</td>
                    <td>
                      <div class="d-flex justify-content-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-pencil-fill text-primary"
                          viewBox="0 0 16 16"
                          (click)="ModificaTitolo(todo)"
                        >
                          <path
                            d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-check-square-fill text-success ms-3"
                          viewBox="0 0 16 16"
                          (click)="completeTask(todo)"
                        >
                          <path
                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-x-square-fill text-danger ms-3"
                          viewBox="0 0 16 16"
                          (click)="deleteTask(todo)"
                        >
                          <path
                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                          />
                        </svg>
                      </div>
                    </td>
                  </ng-container>
                </tr>
              </ng-container>
            </tbody>
          </table>
          <div class="input-group mb-3" *ngIf="!showMessage">
            <input
              type="text"
              class="form-control"
              placeholder="Scrivi una task"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              [(ngModel)]="nuovaTask"
            />
            <button
              class="btn btn-outline-primary"
              type="button"
              id="button-addon2"
              (click)="addTask()"
            >
              Aggiungi
            </button>
          </div>
        </div>
      </div>
      <ng-template #noTasks>
        <p>Non ci sono task.</p>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  nuovaTask: string = '';
  showMessage: boolean = true;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTasks();
    this.todoService.togliMessaggioDelay().then(() => {
      this.showMessage = false;
    });
  }

  TaskIncomplete(): boolean {
    return this.todos.some((todo) => !todo.completed);
  }

  loadTasks(): void {
    this.todoService.getTasks().then((tasks) => {
      this.todos = tasks;
    });
  }

  addTask(): void {
    if (this.nuovaTask.trim()) {
      const newTask: Todo = {
        id: this.todos.length + 1,
        title: this.nuovaTask.trim(),
        completed: false,
      };
      this.todoService.addTask(newTask);
      this.nuovaTask = '';
    }

    console.log(this.todos);
  }

  deleteTask(task: Todo): void {
    this.todoService.deleteTask(task);
  }

  completeTask(task: Todo): void {
    task.completed = !task.completed;
  }
  ModificaTitolo(task: Todo): void {
    const newTitle = prompt('Modifica il titolo:', task.title);
    if (newTitle !== null && newTitle.trim() !== '') {
      task.title = newTitle.trim();
    }
  }
}
