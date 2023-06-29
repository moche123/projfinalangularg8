import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router:Router
  ) { }

  public isLoggedIn() :boolean {
    try{
      const localStorageValue = localStorage.getItem('token')
      return localStorageValue ? true : false;
    }catch(err){

      return false;
    }
  }

  public returnToLogin(){
    this._router.navigateByUrl('/auth/login');
  }

  public goToPages(){
    this._router.navigateByUrl('/pages/characters');
  }
}
