import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/auth/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
    selector: 'app-navbar',
    template: `
        <nav class="navbar navbar-expand-lg bg-black">
            <div class="container-fluid">
                <a class="navbar-brand text-danger" href="#">Neetflix</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link active text-white"
                                aria-current="page"
                                [routerLink]="['/']"
                                routerLinkActive="active"
                                [routerLinkActiveOptions]="{ exact: true }"
                                >Home</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link text-white"
                                [routerLink]="['/movies']"
                                routerLinkActive="active"
                                >Movies</a
                            >
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle text-white"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                [routerLink]="['/profile']"
                                routerLinkActive="active"
                                *ngIf="user"
                            >
                                Profile
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" [routerLink]="['/profile/favorites']"
                                routerLinkActive="active"
                                        >Favorites</a
                                    >
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div *ngIf="!user" class="d-flex">
                    <button
                        class="btn btn-outline-light me-2"
                        type="submit"
                        [routerLink]="['/login']"
                    >
                        Login
                    </button>
                    <button
                        class="btn btn-outline-danger"
                        type="submit"
                        [routerLink]="['/register']"
                    >
                        Register
                    </button>
                </div>
                <div *ngIf="user" class="d-flex align-items-center">

                <h4 class="text-white m-0 me-2">{{user.user.name}}</h4>
                <button
                        class="btn btn-outline-danger"
                        type="submit"
                        (click)="logout()"
                    >
                        Logout
                    </button></div>
            </div>
        </nav>
    `,
    styles: [
        `
            .navbar-toggler.collapsed,
            .navbar-toggler:focus {
                background-color: grey !important;
            }
        `,
    ],
})
export class NavbarComponent implements OnInit {

user! : AuthData | null;

    constructor(private authSrv: AuthService) {}

    ngOnInit(): void {
        this.authSrv.user$.subscribe((_user)=>{
            this.user= _user
        })
    }

    logout(){
        this.authSrv.logout();
    }
}
