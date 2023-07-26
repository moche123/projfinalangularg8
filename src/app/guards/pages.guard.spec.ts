import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { PagesGuard } from './pages.guard';

describe('PagesGuard', () => {
  let guard: PagesGuard;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    // Crea un mock del AuthService
    authService = jasmine.createSpyObj<AuthService>('AuthService', ['isLoggedIn', 'returnToLogin']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        PagesGuard,
        { provide: AuthService, useValue: authService },
      ],
    });

    guard = TestBed.inject(PagesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  })

});