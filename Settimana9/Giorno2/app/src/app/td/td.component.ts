import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td',
  template: `
    <div class="container">
      <h1 class="text-center">Template Driven Form</h1>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div>
              <form (ngSubmit)="SubmitFrom()" #contenitoreForm="ngForm">
                <div id="userInfo" ngModelGroup="userInfo" #userGroup="ngModelGroup">
                  <div class="form-group">
                    <label for="name">Nome</label>
                    <input type="text" id="name" name="name" class="form-control" required
                      [(ngModel)]="userForm.name" #name="ngModel">
                    <p *ngIf="name.invalid && name.touched"><strong>Questo campo è obbligatorio</strong></p>
                  </div>

                  <div class="form-group">
                    <label for="alterEgo">Alter Ego</label>
                    <input type="text" id="alterEgo" name="AlterEgo" class="form-control" required
                      [(ngModel)]="userForm.alterEgo" #alterEgo="ngModel">
                    <p *ngIf="alterEgo.invalid && alterEgo.touched"><strong>Questo campo è obbligatorio</strong></p>
                  </div>

                  <div class="form-group">
                    <label for="power">Super Potere</label>
                    <select name="power" id="power" class="form-select" [(ngModel)]="userForm.power">
                      <option value=""></option>
                      <option value="super-forza">super-forza</option>
                      <option value="super-intelligenza">super-intelligenza</option>
                      <option value="membro-enorme">membro-enorme</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="enemy">Nemico</label>
                    <input type="text" id="enemy" name="enemy" class="form-control" required maxlength="10"
                      [(ngModel)]="userForm.enemy" #enemy="ngModel">
                    <p *ngIf="enemy.invalid && enemy.touched"><strong>Questo campo è obbligatorio e max 10 caratteri</strong></p>
                  </div>

                  <div class="form-group">
                    <label for="planet">Planet</label>
                    <input type="text" id="planet" name="planet" class="form-control" required minlength="5"
                      [(ngModel)]="userForm.planet" #planet="ngModel">
                    <p *ngIf="planet.invalid && planet.touched"><strong>Questo campo è obbligatorio e min 5 caratteri</strong></p>
                  </div>

                  <div class="form-group">
                    <label for="weakness">Debolezza</label>
                    <input type="text" id="weakness" name="weakness" class="form-control"
                      [(ngModel)]="userForm.weakness" #weakness="ngModel">
                  </div>

                  <button type="submit" class="btn btn-primary mt-3" [disabled]="contenitoreForm.invalid">Invia</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class TdComponent implements OnInit {
  @ViewChild('contenitoreForm', { static: true }) contenitoreForm!: NgForm;

  userForm = {
    name: '',
    alterEgo: '',
    power: '',
    enemy: '',
    planet: '',
    weakness: ''
  };

  user = {
    name: '',
    alterEgo: '',
    power: '',
    enemy: '',
    planet: '',
    weakness: ''
  };

  ngOnInit(): void {
    this.contenitoreForm.statusChanges?.subscribe(stato => {
      console.log(this.contenitoreForm);
      console.log(`Stato del form: ${stato}`);
    });
  }

  SubmitFrom() {
    console.log(`Form inviato:`, this.userForm);
    this.user.name = this.userForm.name;
    this.user.alterEgo = this.userForm.alterEgo;
    this.user.power = this.userForm.power;
    this.user.enemy = this.userForm.enemy;
    this.user.planet = this.userForm.planet;
    this.user.weakness = this.userForm.weakness;

    this.contenitoreForm.resetForm();
  }
}
