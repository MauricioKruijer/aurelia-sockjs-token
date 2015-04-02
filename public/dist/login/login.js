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

          this.errorMessage = false;
        }

        _createClass(Login, {
          login: {
            value: function login() {
              var _this = this;

              this.running = true;
              this.authService.login(this.username, this.password).then(function (success) {
                _this.running = false;
                _this.errorMessage = false;
                if (success) {
                  _this.appRouter.navigate("/sock-channels");
                } else {
                  // TODO: Display error
                  //throw new Error("Could not authenticate");
                  _this.errorMessage = "Could not authenticate";
                }
              }, function (e) {
                console.log("errrrr");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxxQkFBcUIsRUFDckIsU0FBUyxpQ0FFSixLQUFLOzs7O0FBSFYsMkJBQXFCLFNBQXJCLHFCQUFxQjs7QUFDckIsZUFBUyxrQkFBVCxTQUFTOzs7Ozs7Ozs7QUFFSixXQUFLO0FBRUwsaUJBRkEsS0FBSyxDQUVKLFdBQVcsRUFBRSxTQUFTLEVBQUU7Z0NBRnpCLEtBQUs7O0FBR2QsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsY0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7O0FBRTNCLGNBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ3BCLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztBQUVuQixjQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjs7cUJBWFUsS0FBSztBQWFoQixlQUFLO21CQUFBLGlCQUFHOzs7QUFDTixrQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDcEIsa0JBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUMvQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDZixzQkFBSyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLHNCQUFLLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDMUIsb0JBQUksT0FBTyxFQUFFO0FBQ1gsd0JBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUMzQyxNQUFNOzs7QUFHTCx3QkFBSyxZQUFZLEdBQUcsd0JBQXdCLENBQUM7aUJBQzlDO2VBQ0YsRUFBRSxVQUFBLENBQUMsRUFBSTtBQUNOLHVCQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLHNCQUFLLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDckIsdUJBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztlQUMxQixDQUFDLENBQUM7YUFDUjs7O0FBOUJNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUFFOzs7O2VBRG5ELEtBQUsiLCJmaWxlIjoibG9naW4vbG9naW4uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==