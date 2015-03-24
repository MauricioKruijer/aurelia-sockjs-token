System.register(["./auth", "aurelia-router"], function (_export) {
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

          if (this.authService.user) {
            this.appRouter.navigate("/login/logout");
          }
        }

        _createClass(Login, {
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
                  //console.log("Erreur", this.username, this.password);
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
/**
 * Created by Mauricio on 24/03/15.
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFHUSxxQkFBcUIsRUFDckIsU0FBUyxpQ0FFSixLQUFLOzs7O0FBSFYsMkJBQXFCLFNBQXJCLHFCQUFxQjs7QUFDckIsZUFBUyxrQkFBVCxTQUFTOzs7Ozs7Ozs7QUFFSixXQUFLO0FBRUwsaUJBRkEsS0FBSyxDQUVKLFdBQVcsRUFBRSxTQUFTLEVBQUU7Z0NBRnpCLEtBQUs7O0FBR2QsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsY0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7O0FBRTNCLGNBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ3BCLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztBQUVuQixjQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFDO0FBQ3ZCLGdCQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztXQUMxQztTQUNGOztxQkFiVSxLQUFLO0FBY2hCLGVBQUs7bUJBQUEsaUJBQUc7OztBQUNOLHFCQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25CLGtCQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDL0MsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2Ysc0JBQUssT0FBTyxHQUFHLEtBQUssQ0FBQztBQUNyQixvQkFBSSxPQUFPLEVBQUU7QUFDWCx3QkFBSyxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQzNDLE1BQU07OztBQUdMLHdCQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7aUJBQzNDO2VBQ0YsRUFBRSxVQUFBLENBQUMsRUFBSTtBQUNOLHNCQUFLLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDckIsdUJBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztlQUMxQixDQUFDLENBQUM7YUFDUjs7O0FBN0JNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUFFOzs7O2VBRG5ELEtBQUsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==