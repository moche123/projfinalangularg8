import { LoginComponent } from './login.component';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { delay, of } from 'rxjs';
import { fakeAsync, flush, tick } from '@angular/core/testing';

const mockFormBuilder = {
  group: (controlsConfig: { [key: string]: any }): FormGroup => {
    const formGroup:any = {} as FormGroup;

    formGroup.value = {
      email:'someEmail@email.com',
      password: '<PASSWORD>'
    }
    return formGroup;
  },
  control: (value: any = '', validators: any[] = []) => [value, validators]
};

const mockRouter = {
  navigateByUrl: jasmine.createSpy('navigateByUrl')
};

const mockAuthService = {
  login: jasmine.createSpy('login')
}


describe('LoginComponent', () => {
  let component: LoginComponent;

  
  beforeEach(() => {
    component = new LoginComponent(
      <FormBuilder>(<unknown>mockFormBuilder),
      <Router>(<unknown>mockRouter),
      <AuthService>(<unknown>mockAuthService),

    )
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test login', fakeAsync(() => {
    mockAuthService.login.and.returnValue(of(true));
    component.login();
    flush();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/pages');
  }));

  it('should test login FAILED', fakeAsync(() => {
    mockAuthService.login.and.returnValue(of({
      msg: 'Error',
      errors: {
        email: 'dfsdfs',
        password: 'sdfsdfds'
      }
    }) );
    component.login();
    tick(1500);
    expect(component.messages.length).toBeGreaterThan(0);
    tick(5000);
    expect(component.messages.length).toBe(0);

  }));
});
