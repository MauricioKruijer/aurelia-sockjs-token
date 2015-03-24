import {AuthenticationService} from '../auth';
import {AppRouter} from 'aurelia-router';

export class Logout {
  static inject() {return [AuthenticationService, AppRouter]; }
  constructor(authService, appRouter) {
    this.authService = authService;
    this.appRouter = appRouter;

    if(!this.authService.user) {
      this.appRouter.navigate("/login");
    }
  }
  logout() {
    console.log('logout clicked');
    this.authService.logout();
    this.appRouter.navigate("/");
  }
}