import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PagesGuard {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.authService.isLoggedIn());
    if (this.authService.isLoggedIn()) {
      return true;
    }
    // alert('POR FAVOR LOGUEARSE');
    this.authService.returnToLogin();
    return false;
  }
}