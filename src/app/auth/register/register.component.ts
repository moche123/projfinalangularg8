import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this._fb.group({
    name: ['usuario', [Validators.required, Validators.minLength(6)]],
    email: ['usuario2@usuario.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })

  message: string[] = [];

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  fieldIsValid(field: string) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  registerUser() {
    const { name, email, password } = this.myForm.value;


  if(email && name && password){
      this._router.navigateByUrl('/auth/login')
    }

  }

}
