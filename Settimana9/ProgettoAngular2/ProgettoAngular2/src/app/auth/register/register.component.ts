import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template: `
    <div class="main d-flex align-items-center justify-content-center text-white">
      <div class="bg-dark p-4 rounded-2 w-25 border border-secondary">
        <h1 class="text-center mb-4">Register</h1>

        <form #modulo="ngForm" (ngSubmit)="PostUtenti(modulo)" class="needs-validation my-3">
          <div class="form-group mb-3 was-validated">
            <label class="form-label" for="email">Email</label>
            <input class="form-control mt-2" type="email" id="email" required name="email" [(ngModel)]="email" />
            <div class="invalid-feedback">Inserire Email</div>
          </div>
          <div class="form-group mb-3 was-validated">
            <label class="form-label" for="name">Nome Utente</label>
            <input class="form-control mt-2" type="text" id="name" required name="name" [(ngModel)]="name" />
            <div class="invalid-feedback">Inserire Nome Utente</div>
          </div>
          <div class="form-group mb-3 was-validated">
            <label class="form-label" for="password">Password</label>
            <input class="form-control mt-2" type="password" id="password" required name="password" [(ngModel)]="password" />
            <div class="invalid-feedback">Inserire Password</div>
          </div>
          <button class="btn btn-danger w-100 mt-2 mb-4 fs-5" type="submit" [disabled]="modulo.invalid">REGISTRATI</button>

          <h4>
            Hai gia un account?
            <a [routerLink]="['/login']" class="text-decoration-none text-white fw-bold">Login</a>
          </h4>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      .main {
        height: 100vh;
        background-image: url('https://mebincdn.themebin.com/1664271579476.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    `,
  ],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  name: string = '';
  password: string = '';

  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}

  PostUtenti(form: NgForm) {
    console.log(form.value);
    try {
      this.authSrv.PostUtenti(form.value).subscribe();
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.error(error);
      if (error.status == 400) {
        alert('Email già registrata');
        this.router.navigate(['/register']);
      }
    }
  }
}
