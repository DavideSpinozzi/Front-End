import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/auth/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="pb-5 main d-flex justify-content-center align-items-center">
        <div class="bg-dark w-50 h-50 m-auto row justify-content-center align-items-center rounded border border-secondary">
            <div class= "col-8 h-75 px-5 d-flex border-end">

            <div class="m-auto">
                <h1 *ngIf="user" class="text-white">Ciao {{user.user.name}}</h1>
                <h1 class="text-white">Benvenuto in Neetflix</h1>
                <h2 class="text-white">Nel nostro catalogo troverai i film più votati per ogni genere</h2>
            </div>
     </div>
            <div class="col-4">
            <div *ngIf="user" class="d-flex flex-column align-items-center">
                <h1 class="text-white mb-3">Vai al catalogo</h1>
            <button class="btn btn-outline-danger fs-3 text-white" type="submit" [routerLink]="['/movies']">Movies</button>
            </div>
                <div *ngIf="!user" class="d-flex flex-column align-items-center p-5">
                <button class="btn btn-outline-light fs-3 mb-3" type="submit" [routerLink]="['/login']">Login</button>
                <h4 class="text-secondary mb-3">Oppure</h4>
        <button class="btn btn-outline-danger fs-3" type="submit" [routerLink]="['/register']">Register</button>
                </div>
            </div>
        </div>
    </div>
  `,
  styles: [
    `
    .main{
height: 100vh;
background-image: url('https://mebincdn.themebin.com/1664271579476.jpg');
background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
    }

    `
  ]
})
export class HomeComponent implements OnInit {

    user! : AuthData | null;

    constructor(private authSrv: AuthService) {}

    ngOnInit(): void {
        this.authSrv.user$.subscribe((_user)=>{
            this.user= _user
        })
    }
}
