import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PagesGuard } from './pages.guard';

const mockAuthService = {
  isLoggedIn: jasmine.createSpy('isLoggedIn'),
  returnToLogin: jasmine.createSpy('returnToLogin')
}

describe('PagesGuard', () => {
  let guard: PagesGuard;
  let routeSnapshot: ActivatedRouteSnapshot;
  let routerState: RouterStateSnapshot;

  beforeEach(() => {
    guard = new PagesGuard(
    
      <AuthService>(<unknown>mockAuthService),

    )
    
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  })

  it('should allow access when user is logged in', () => {
    routeSnapshot = jasmine.createSpyObj<ActivatedRouteSnapshot>('ActivatedRouteSnapshot', ['toString']);
    routerState = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);
    mockAuthService.isLoggedIn.and.returnValue(true)
    const result = guard.canActivate(routeSnapshot, routerState);
    expect(result).toBe(true);
    expect(mockAuthService.isLoggedIn).toHaveBeenCalled();
    expect(mockAuthService.returnToLogin).not.toHaveBeenCalled();
  });

});