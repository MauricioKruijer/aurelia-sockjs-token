System.register(["../../services/auth", "aurelia-router"], function (_export) {
  var AuthenticationService, AppRouter, _createClass, _classCallCheck, Login;

  return {
    setters: [function (_servicesAuth) {
      AuthenticationService = _servicesAuth.AuthenticationService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9sb2dpbi9sb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEscUJBQXFCLEVBQ3JCLFNBQVMsaUNBRUosS0FBSzs7OztBQUhWLDJCQUFxQixpQkFBckIscUJBQXFCOztBQUNyQixlQUFTLGtCQUFULFNBQVM7Ozs7Ozs7OztBQUVKLFdBQUs7QUFFTCxpQkFGQSxLQUFLLENBRUosV0FBVyxFQUFFLFNBQVMsRUFBRTtnQ0FGekIsS0FBSzs7QUFHZCxjQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQixjQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7QUFFM0IsY0FBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7QUFDcEIsY0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsY0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7O0FBRW5CLGNBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCOztxQkFYVSxLQUFLO0FBYWhCLGVBQUs7bUJBQUEsaUJBQUc7OztBQUNOLGtCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUNwQixrQkFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQy9DLElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUNmLHNCQUFLLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDckIsc0JBQUssWUFBWSxHQUFHLEtBQUssQ0FBQztBQUMxQixvQkFBSSxPQUFPLEVBQUU7QUFDWCx3QkFBSyxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQzNDLE1BQU07OztBQUdMLHdCQUFLLFlBQVksR0FBRyx3QkFBd0IsQ0FBQztpQkFDOUM7ZUFDRixFQUFFLFVBQUEsQ0FBQyxFQUFJO0FBQ04sdUJBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsc0JBQUssT0FBTyxHQUFHLEtBQUssQ0FBQztBQUNyQix1QkFBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2VBQzFCLENBQUMsQ0FBQzthQUNSOzs7QUE5Qk0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEbkQsS0FBSyIsImZpbGUiOiJyb3V0ZXMvbG9naW4vbG9naW4uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==