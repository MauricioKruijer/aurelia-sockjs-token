System.register(["../auth", "aurelia-router"], function (_export) {
  var AuthenticationService, AppRouter, _createClass, _classCallCheck, Logout;

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

      Logout = _export("Logout", (function () {
        function Logout(authService, appRouter) {
          _classCallCheck(this, Logout);

          this.authService = authService;
          this.appRouter = appRouter;

          if (!this.authService.user) {
            this.appRouter.navigate("/login");
          }
        }

        _createClass(Logout, {
          logout: {
            value: function logout() {
              console.log("logout clicked");
              this.authService.logout();
              this.appRouter.navigate("/");
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [AuthenticationService, AppRouter];
            }
          }
        });

        return Logout;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEscUJBQXFCLEVBQ3JCLFNBQVMsaUNBRUosTUFBTTs7OztBQUhYLDJCQUFxQixTQUFyQixxQkFBcUI7O0FBQ3JCLGVBQVMsa0JBQVQsU0FBUzs7Ozs7Ozs7O0FBRUosWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxXQUFXLEVBQUUsU0FBUyxFQUFFO2dDQUZ6QixNQUFNOztBQUdmLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOztBQUUzQixjQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7QUFDekIsZ0JBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQ25DO1NBQ0Y7O3FCQVRVLE1BQU07QUFVakIsZ0JBQU07bUJBQUEsa0JBQUc7QUFDUCxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzlCLGtCQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzFCLGtCQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM5Qjs7O0FBYk0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBQyxxQkFBTyxDQUFDLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEbEQsTUFBTSIsImZpbGUiOiJsb2dpbi9sb2dvdXQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==