import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <div class="main d-flex align-items-center justify-content-center text-white">
      <div class="bg-dark p-4 rounded-2 w-25 border border-secondary">
        <h1 class="text-center mb-4">Login</h1>

        <form #form="ngForm" (ngSubmit)="accedi(form)" class="needs-validation my-3">
          <div class="form-group mb-3 was-validated">
            <label class="form-label" for="email">Email</label>
            <input class="form-control mt-2" type="email" id="email" required name="email" [(ngModel)]="email" />
            <div class="invalid-feedback">Inserire Email</div>
          </div>
          <div class="form-group mb-3 was-validated">
            <label class="form-label" for="password">Password</label>
            <input class="form-control mt-2" type="password" id="password" required name="password" [(ngModel)]="password" />
            <div class="invalid-feedback">Inserire Password</div>
          </div>
          <div class="form-group mb-3 form-check">
            <input class="form-check-input mt-1" type="checkbox" id="check" />
            <label class="form-check-label" for="check">Ricordami</label>
          </div>
          <button class="btn btn-danger w-100 mt-2 mb-4 fs-5" type="submit" [disabled]="form.invalid">LOGIN</button>

          <h4>
            Non hai un account?
            <a [routerLink]="['/register']" class="text-decoration-none text-white fw-bold">Registrati</a>
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
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}

  accedi(form: NgForm) {
    console.log(form.value);
    try {
      this.authSrv.login(form.value).subscribe();
      alert('Login effettuato!');
      this.router.navigate(['/']);
    } catch (error) {
      alert('Login errato');
      console.error(error);
      this.router.navigate(['/login']);
    }
  }
}
