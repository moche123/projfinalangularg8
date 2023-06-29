import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export function  authGuard(): CanActivateFn {

   //! SI NO ESTA LOGUEADO; SI PUEDES ENTRAR AL LOGIN

    //! CASO: (TRUE)SI ESTOY LOGUEADO --> NO TE DEJO ENTRAR AL LOGIN, MANDAME A PERSONAJES
    //! CASO: (FALSE)NO ESTOY LOGUEADO --> TE DEJO ENTRAR AL LOGIN

    
  return () => {
    const oauthService: AuthService = inject(AuthService);
    
    if (!oauthService.isLoggedIn() ) {
      return true;
    }
    oauthService.goToPages();
    return false;
  };
};
