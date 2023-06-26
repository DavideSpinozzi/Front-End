import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-r',
  template: `
    <div class="container">
      <h1 class="text-center">Reactive Form</h1>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <form [formGroup]="userForm" (ngSubmit)="submitForm()">
              <div formGroupName="userInfo">
                <div class="form-group">
                  <label for="name">Nome</label>
                  <input type="text" id="name" formControlName="name" class="form-control">

                  <p *ngIf="userForm.get('userInfo.name')?.invalid && userForm.get('userInfo.name')?.touched">
                    <strong>Questo campo è obbligatorio</strong>
                  </p>
                </div>

                <div class="form-group">
                  <label for="alterEgo">Alter Ego</label>
                  <input type="text" id="alterEgo" formControlName="alterEgo" class="form-control">

                  <p *ngIf="userForm.get('userInfo.alterEgo')?.invalid && userForm.get('userInfo.alterEgo')?.touched">
                    <strong>Questo campo è obbligatorio</strong>
                  </p>
                </div>

                <div class="form-group">
                  <label for="power">Super Potere</label>
                  <select id="power" formControlName="power" class="form-select">
                    <option value=""></option>
                    <option value="super-forza">super-forza</option>
                    <option value="super-intelligenza">super-intelligenza</option>
                    <option value="membro-enorme">membro-enorme</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="enemy">Nemico</label>
                  <input type="text" id="enemy" formControlName="enemy" class="form-control" maxlength="10">

                  <p *ngIf="userForm.get('userInfo.enemy')?.invalid && userForm.get('userInfo.enemy')?.touched">
                    <strong>Questo campo è obbligatorio e deve contenere massimo 10 caratteri</strong>
                  </p>
                </div>

                <div class="form-group">
                  <label for="planet">Planet</label>
                  <input type="text" id="planet" formControlName="planet" class="form-control" minlength="5">

                  <p *ngIf="userForm.get('userInfo.planet')?.invalid && userForm.get('userInfo.planet')?.touched">
                    <strong>Questo campo è obbligatorio e deve contenere almeno 5 caratteri</strong>
                  </p>
                </div>

                <div class="form-group">
                  <label for="weakness">Debolezza</label>
                  <input type="text" id="weakness" formControlName="weakness" class="form-control">
                </div>
              </div>

              <button type="submit" class="btn btn-primary mt-3" [disabled]="userForm.invalid">Invia</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class RComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = this.formBuilder.group({
      userInfo: this.formBuilder.group({
        name: ['', Validators.required],
        alterEgo: ['', Validators.required],
        power: [''],
        enemy: ['', Validators.required],
        planet: ['', Validators.required],
        weakness: ['']
      })
    });
  }

  submitForm(): void {
    if (this.userForm.valid) {
      const user = this.userForm.value.userInfo;
      console.log('Form inviato:', user);

      this.userForm.reset();
    }
  }
}
