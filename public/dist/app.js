System.register(["aurelia-router", "bootstrap", "./services/auth"], function (_export) {
  var Router, Redirect, bootstrap, AuthorizeStep, AuthenticationService, _createClass, _classCallCheck, App, UsercheckStep;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
      Redirect = _aureliaRouter.Redirect;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }, function (_servicesAuth) {
      AuthorizeStep = _servicesAuth.AuthorizeStep;
      AuthenticationService = _servicesAuth.AuthenticationService;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia";
            config.addPipelineStep("authorize", AuthorizeStep); // Add a route filter to the authorize extensibility point.
            config.addPipelineStep("authorize", UsercheckStep);

            config.map([{ route: "sock-channels", moduleId: "./routes/sock-channels/sock-channels", nav: true, title: "SockJS Channel example", auth: true }, { route: ["", "welcome"], moduleId: "./routes/welcome/welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "./routes/flickr/flickr", nav: true }, { route: "login", moduleId: "./routes/login/login", nav: true, redirectLoggedInUser: "/login/logout" }, { route: "login/logout", moduleId: "./routes/login/logout" }, { route: "child-router", moduleId: "./routes/child-router/child-router", nav: true, title: "Child Router" }]);
          });
        }

        _createClass(App, null, {
          inject: {
            // lkjslkj

            value: function inject() {
              return [Router];
            }
          }
        });

        return App;
      })());

      UsercheckStep = (function () {
        function UsercheckStep(authenticationService) {
          _classCallCheck(this, UsercheckStep);

          this.auth = authenticationService;
          console.log("Pipeline step");
        }

        _createClass(UsercheckStep, {
          run: {
            value: function run(routingContext, next) {
              //.then(user => {
              if (this.auth.user) {
                var redirectTo = routingContext.nextInstructions.filter(function (a) {
                  return a.config.redirectLoggedInUser;
                });
                if (redirectTo.length === 0) {
                  return next();
                }return next.cancel(new Redirect(redirectTo[0].config.redirectLoggedInUser));
              } else {
                return next();
              }
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [AuthenticationService];
            }
          }
        });

        return UsercheckStep;
      })();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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