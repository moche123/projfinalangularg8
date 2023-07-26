import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';

const mockRouter = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);


describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(() => {
    component = new HeaderComponent(
      <Router>(<unknown> typeof mockRouter)
    )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
