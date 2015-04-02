import {Router,Redirect} from 'aurelia-router';
import bootstrap from 'bootstrap';

import {AuthorizeStep,AuthenticationService} from './auth';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.
      config.addPipelineStep('authorize', UsercheckStep);

      config.map([
        { route: 'sock-channels', moduleId: 'sock-channels', nav: true, title: "SockJS Channel example", auth: true},
        { route: ['','welcome'],  moduleId: 'welcome',       nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: 'flickr',        nav: true },
        { route: 'login',         moduleId: './login/login', nav: true, redirectLoggedInUser: "/login/logout"},
        { route: 'login/logout',  moduleId: './login/logout'},
        { route: 'child-router',  moduleId: 'child-router',  nav: true, title:'Child Router' }
      ]);
    });
  }
}

class UsercheckStep {
  static inject() { return [AuthenticationService]; }
  constructor(authenticationService) {
    this.auth = authenticationService;
    console.log("Pipeline step");
  }
  run(routingContext, next) {
    //.then(user => {
    if(this.auth.user) {
      const redirectTo = routingContext.nextInstructions.filter(a => a.config.redirectLoggedInUser);
      if (redirectTo.length === 0) return next();

      return next.cancel(new Redirect(redirectTo[0].config.redirectLoggedInUser));
    } else {
      return next();
    }
  }
}