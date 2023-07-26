import { of } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { fakeAsync, flush } from '@angular/core/testing';

const mockHttpClient = {
  post: jasmine.createSpy('post').and.returnValue(of({
    ok: 'true'
  }))
};

const mockRouter = {
  navigateByUrl: jasmine.createSpy('navigateByUrl')
};


describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService(
      <Router>(<unknown>mockRouter),
      <HttpClient>(<unknown>mockHttpClient),

    )
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*
   public returnToLogin(){
    this._router.navigateByUrl('/auth/login');
  }
  
  */

  it('should test returnToLogin', fakeAsync(() => {
    service.returnToLogin();
    flush();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/auth/login');
  }));


  /*
  public login(email:string, password:string):Observable<string>{
    
    const url = `${this.baseUrl}/api/auth`

    const body = { email,password }

    return this._http.post<any>(url,body)
    .pipe(
      //*TAP ==> NO RETORNA NADA (VOID)
      tap(({ok,token,uid,name}) =>{
        if(ok){
          localStorage.setItem('token',token!) //*  ! ==> Aseguro que el valor siempre llega 
          localStorage.setItem('userId',uid!)
          localStorage.setItem('name',name!)
        }else{
          localStorage.clear();
        }
      } ),

      map(resp => resp.ok),
      catchError(err=>{
        return of(err.error) //! también existe from ==> retorna un observable
      })
    )

  }
  
  
  */

  it('should test login', fakeAsync(() => {
    const res = service.login('email','password');
    flush();
    res.subscribe(res => {
      expect(res).toBe('true')
    })
  }));

});
