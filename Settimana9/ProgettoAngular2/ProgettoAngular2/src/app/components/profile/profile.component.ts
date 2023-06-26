import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/auth/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-profile',
  template: `
    <div class="w-100 text-center main bg-black text-white">
    <h1>Ciao {{user?.user?.name}}</h1>
    <h3>Da qui potrai visualizzare i tuoi film preferiti</h3>
    <hr />
    <router-outlet></router-outlet>
</div>
  `,
  styles: [`
  .main{
    min-height:100vh
  }
  `
  ]
})
export class ProfileComponent implements OnInit {

    user! : AuthData | null;

    constructor(private authSrv: AuthService) {}

    ngOnInit(): void {
        this.authSrv.user$.subscribe((_user)=>{
            this.user= _user
        })
    }
}
