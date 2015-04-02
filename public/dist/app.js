System.register(["aurelia-router", "bootstrap", "./auth"], function (_export) {
  var Router, Redirect, bootstrap, AuthorizeStep, AuthenticationService, _createClass, _classCallCheck, App, UsercheckStep;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
      Redirect = _aureliaRouter.Redirect;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }, function (_auth) {
      AuthorizeStep = _auth.AuthorizeStep;
      AuthenticationService = _auth.AuthenticationService;
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

            config.map([{ route: "sock-channels", moduleId: "sock-channels", nav: true, title: "SockJS Channel example", auth: true }, { route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true }, { route: "login", moduleId: "./login/login", nav: true, redirectLoggedInUser: "/login/logout" }, { route: "login/logout", moduleId: "./login/logout" }, { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }]);
          });
        }

        _createClass(App, null, {
          inject: {
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