import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class AuthGuard  {
  constructor(private injector: Injector) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const oauthService: AuthService = this.injector.get(AuthService);

    if (!oauthService.isLoggedIn()) {
      return true;
    }
    
    oauthService.goToPages();
    return false;
  }
}