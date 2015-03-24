/**
 * Created by Mauricio on 24/03/15.
 */
import {Redirect} from 'aurelia-router';
const SIMULATE_LATENCY = true;

function returnData(fn) {
  if (SIMULATE_LATENCY) {
    return new Promise(resolve => setTimeout(() => resolve(), 500))
        .then(() => new Promise(fn));
  } else {
    return new Promise(fn);
  }
}

let user = null;

class User {
  constructor(name) {
    this.name = name;
  }
}

export class AuthenticationService {
  get user() {
    return user;
  }

  checkLogin() {
    // If ther is no local user, then there is no point in running
    // a request to the server.
    if (user === null)
      return Promise.resolve(null);

    // In a real world environment, where a user is signed in to a
    // server, using cookies or something similar, that login might
    // expire, without the client beeing notified.
    // This here is to simulate a request to the server,
    // to ensure we're still logged in.
    return returnData(resolve => resolve(true))
        .then(status => {
          // true here could indicate we're still logged in,
          // whereas false would be not logged in.
          if (status === false) {
            // if the login has expired on the server, delete the
            // one on the client as well.
            user = null;
          }

          // Return the user as a convenience, so we can just
          // use the value without having to reacquire it from
          // the service.
          return user;
        });
  }

  hasGroups(username, groups) {
    // Check if user has admin rights.
    return returnData(resolve => resolve(true));
  }

  login(username, password) {
    // this is a demo, accept anyone with a password of "test"
    // in reality, there would also be more checks to prevent
    // sending off multiple login requests at once
    if (password === 'test') {
      return returnData(resolve => {
        user = new User(username);
        resolve(true);
      });
    } else {
      return returnData(resolve => resolve(false));
    }
  }

  logout() {
    if (user === null) {
      // If there is no user, return success.
      return Promise.resolve(true);
    }

    return returnData(resolve => {
      user = null;
      resolve(true);
    });
  }
}

export class AuthorizeStep {
  static inject() { return [AuthenticationService]; }
  constructor(authenticationService) {
    this.auth = authenticationService;
  }

  run(routingContext, next) {
    // Check for the routes "auth" key.
    const authRoutes = routingContext.nextInstructions.filter(i => i.config.auth);
    if (authRoutes.length === 0)
      return next();

    // If any of the auth-keys are a string,
    // treat this as a group name.
    const groups = authRoutes.map(r => r.config.auth).filter(a => typeof a === 'string');

    // Check that the user is logged in.
    return this.auth.checkLogin().then(user => {
      if (user === null)
        return false;

      if (groups.length === 0)
        return true;

      return this.auth.hasGroups(user.name, groups);
    }).then(authorized => {
      if (authorized)
        return next();

      return next.cancel(new Redirect('/login'));
    });
  }
}