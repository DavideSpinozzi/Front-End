 import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthData } from './auth-data.interface';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
    baseURL = environment.baseURL;
    user!: AuthData
    jwtHelper = new JwtHelperService();
    private authSubj = new BehaviorSubject<null | AuthData>(null);
    user$ = this.authSubj.asObservable();
    timeOut: any;

    constructor(private http: HttpClient , private router: Router) { }

    login(data:{email: string, password:string}){
        return this.http.post<AuthData>(`${this.baseURL}/login`, data).pipe(
            tap((data)=>{
                console.log(data);
                this.authSubj.next(data);
                this.user = data;
                console.log(this.user);
                localStorage.setItem('user' , JSON.stringify(data));
                this.autoLogout(data);

            })
        )
    }

    logout(){
        this.authSubj.next(null);
        localStorage.removeItem('user');
        this.router.navigate((['/login']))
    }

    autoLogout(data: AuthData) {
        const scadenza = this.jwtHelper.getTokenExpirationDate(
            data.accessToken
        ) as Date;

        const tempoScadenza = scadenza.getTime() - new Date().getTime();
        this.timeOut = setTimeout(() => {
            this.logout()
        }, tempoScadenza);
    }

    restore() {
        const utenteLoggato = localStorage.getItem('user');
        if (!utenteLoggato) {
            return;
        }

        const datiUtente: AuthData = JSON.parse(utenteLoggato);
        if (this.jwtHelper.isTokenExpired(datiUtente.accessToken)) {
            return;
        }
        this.authSubj.next(datiUtente);
        this.autoLogout(datiUtente);
    }


    PostUtenti(data: {
        email: string,
          name: string,
          password: string
    }){
      return this.http.post(`${this.baseURL}/users` , data);
    }
  }
