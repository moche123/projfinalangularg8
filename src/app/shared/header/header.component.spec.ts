import { fakeAsync, flush } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';


const mockRouter = {
  url: 'url',
  events: of(new NavigationEnd(0, 'url', 'url')),
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl')
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(() => {
    component = new HeaderComponent(
      <Router>(<unknown>mockRouter),
    )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // closeSession(){
  //   localStorage.clear();
  //   this._router.navigateByUrl('/auth/login')
  // }
  it('should test closeSession()', fakeAsync(() => {


    spyOn(localStorage, 'clear'); 
    component.closeSession();
    flush();
    expect(mockRouter.navigateByUrl).toHaveBeenCalled();
  
  }));

});
