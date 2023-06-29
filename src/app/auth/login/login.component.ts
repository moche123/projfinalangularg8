import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public myForm:FormGroup = this._fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.minLength(6)]]
  });

  public messages:String[] = [];
  auth!:any;
  //mensaje:any=[];
  constructor( 
    private _fb:FormBuilder,
    private _router: Router
  ) { }



  ngOnInit(): void {
  }

  login(){

    const { email,password } = this.myForm.value

    if(email && password){
      localStorage.setItem('token','asdasdasd');
      this._router.navigateByUrl('/');
    }


  }

  fieldIsValidReactive(field:any){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

}
