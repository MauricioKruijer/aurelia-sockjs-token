System.register(["../auth", "aurelia-router"], function (_export) {
  var AuthenticationService, AppRouter, _createClass, _classCallCheck, Login;

  return {
    setters: [function (_auth) {
      AuthenticationService = _auth.AuthenticationService;
    }, function (_aureliaRouter) {
      AppRouter = _aureliaRouter.AppRouter;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Login = _export("Login", (function () {
        function Login(authService, appRouter) {
          _classCallCheck(this, Login);

          this.authService = authService;
          this.appRouter = appRouter;

          this.name = "Login";
          this.username = "";
          this.password = "";
        }

        _createClass(Login, {
          canActivate: {
            value: function canActivate() {
              if (this.authService.user) {
                this.appRouter.navigate("/login/logout");
              }
            }
          },
          login: {
            value: function login() {
              var _this = this;

              console.log("meh");
              this.authService.login(this.username, this.password).then(function (success) {
                _this.running = false;
                if (success) {
                  _this.appRouter.navigate("/sock-channels");
                } else {
                  // TODO: Display error
                  throw new Error("Could not authenticate");
                }
              }, function (e) {
                _this.running = false;
                return Promise.reject(e);
              });
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [AuthenticationService, AppRouter];
            }
          }
        });

        return Login;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxxQkFBcUIsRUFDckIsU0FBUyxpQ0FFSixLQUFLOzs7O0FBSFYsMkJBQXFCLFNBQXJCLHFCQUFxQjs7QUFDckIsZUFBUyxrQkFBVCxTQUFTOzs7Ozs7Ozs7QUFFSixXQUFLO0FBRUwsaUJBRkEsS0FBSyxDQUVKLFdBQVcsRUFBRSxTQUFTLEVBQUU7Z0NBRnpCLEtBQUs7O0FBR2QsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsY0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7O0FBRTNCLGNBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ3BCLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBR3BCOztxQkFYVSxLQUFLO0FBWWhCLHFCQUFXO21CQUFBLHVCQUFHO0FBQ1osa0JBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUM7QUFDdkIsb0JBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2VBQzFDO2FBQ0Y7O0FBQ0QsZUFBSzttQkFBQSxpQkFBRzs7O0FBQ04scUJBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsa0JBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUMvQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDZixzQkFBSyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLG9CQUFJLE9BQU8sRUFBRTtBQUNYLHdCQUFLLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDM0MsTUFBTTs7QUFFTCx3QkFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2lCQUMzQztlQUNGLEVBQUUsVUFBQSxDQUFDLEVBQUk7QUFDTixzQkFBSyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLHVCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7ZUFDMUIsQ0FBQyxDQUFDO2FBQ1I7OztBQS9CTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFBRTs7OztlQURuRCxLQUFLIiwiZmlsZSI6ImxvZ2luL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=