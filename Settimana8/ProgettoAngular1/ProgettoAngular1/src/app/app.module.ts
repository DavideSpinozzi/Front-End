import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CompletatiComponent } from './completati/completati.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TodoComponent},
  { path: 'completati', component: CompletatiComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
