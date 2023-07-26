import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  myForm: FormGroup = this._fb.group({
    name: ['usuario', [Validators.required, Validators.minLength(6)]],
    email: ['usuario2@usuario.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })

  message: string[] = [];

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService

  ) { }


  fieldIsValid(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  registerUser() {
    const { name, email, password } = this.myForm.value;

    this._authService.register(name, email, password, 1, true)
      .subscribe(result => {
        if (result === true) {
          this._router.navigateByUrl('/pages')
        } else {

          //TODO: mostrar message de error
          //valida los errores (validaciones) desde la base de datos

          if (result.msg) {
            setTimeout(() => {
              this.message.push(result.msg);
            }, 300);

            setTimeout(() => {
              this.message = [];
            }, 3100)
          }

          if (result.errors?.name) {
            setTimeout(() => {
              this.message.push(result.errors.name.msg);
            }, 300);

            setTimeout(() => {
              this.message = [];
            }, 3100)
          }
          if (result.errors?.email) {
            setTimeout(() => {
              this.message.push(result.errors.email.msg);
            }, 300);

            setTimeout(() => {
              this.message = [];
            }, 3100)
          }

          if (result.errors?.password) {
            setTimeout(() => {
              this.message.push(result.errors.password.msg);
            }, 300);

            setTimeout(() => {
              this.message = [];
            }, 3100)
          }

        }
      })



  }

}
