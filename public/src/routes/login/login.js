import {AuthenticationService} from '../../services/auth';
import {AppRouter} from 'aurelia-router';

export class Login {
  static inject() { return [AuthenticationService, AppRouter]; }
  constructor(authService, appRouter) {
    this.authService = authService;
    this.appRouter = appRouter;

    this.name = "Login";
    this.username = '';
    this.password = '';

    this.errorMessage = false;
  }

  login() {
    this.running = true;
    this.authService.login(this.username, this.password)
        .then(success => {
          this.running = false;
          this.errorMessage = false;
          if (success) {
            this.appRouter.navigate("/sock-channels");
          } else {
            // TODO: Display error
            //throw new Error("Could not authenticate");
            this.errorMessage = "Could not authenticate";
          }
        }, e => {
          console.log("errrrr");
          this.running = false;
          return Promise.reject(e);
        });
  }
}