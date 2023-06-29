import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export function pagesGuard(): CanActivateFn {

  return () => {
      
      const oauthService: AuthService = inject(AuthService);
      console.log(oauthService.isLoggedIn())
      if (oauthService.isLoggedIn() ) {
        return true;
      }
      // alert('POR FAVOR LOGUEARSE')
      oauthService.returnToLogin();
      return false;
    };

    
};
