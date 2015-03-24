/**
 * Created by Mauricio on 24/03/15.
 */
import {AuthenticationService} from '../auth';
import {AppRouter} from 'aurelia-router';

export class Login {
  static inject() { return [AuthenticationService, AppRouter]; }
  constructor(authService, appRouter) {
    this.authService = authService;
    this.appRouter = appRouter;

    this.name = "Login";
    this.username = '';
    this.password = '';

    if(this.authService.user){
      this.appRouter.navigate("/login/logout");
    }
  }
  login() {
    console.log("meh");
    this.authService.login(this.username, this.password)
        .then(success => {
          this.running = false;
          if (success) {
            this.appRouter.navigate("/sock-channels");
          } else {
            // TODO: Display error
            throw new Error("Could not authenticate");
          }
        }, e => {
          this.running = false;
          return Promise.reject(e);
        });
  }
}