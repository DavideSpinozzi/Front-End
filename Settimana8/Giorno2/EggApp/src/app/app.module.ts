import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AttivoComponent } from './attivo/attivo.component';
import { InattivoComponent } from './inattivo/inattivo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PostCardComponent } from './post-card/post-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Attivo', component: AttivoComponent },
  { path: 'Inattivo', component: InattivoComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AttivoComponent,
    InattivoComponent,
    NavbarComponent,
    HomeComponent,
    PostCardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
