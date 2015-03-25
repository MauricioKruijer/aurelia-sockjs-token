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
        }

        _createClass(Logout, {
          activate: {
            value: function activate() {
              if (!this.authService.user) {
                this.appRouter.navigate("/login");
              }
            }
          },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEscUJBQXFCLEVBQ3JCLFNBQVMsaUNBRUosTUFBTTs7OztBQUhYLDJCQUFxQixTQUFyQixxQkFBcUI7O0FBQ3JCLGVBQVMsa0JBQVQsU0FBUzs7Ozs7Ozs7O0FBRUosWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxXQUFXLEVBQUUsU0FBUyxFQUFFO2dDQUZ6QixNQUFNOztBQUdmLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzVCOztxQkFMVSxNQUFNO0FBTWpCLGtCQUFRO21CQUFBLG9CQUFHO0FBQ1Qsa0JBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtBQUN6QixvQkFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7ZUFDbkM7YUFDRjs7QUFDRCxnQkFBTTttQkFBQSxrQkFBRztBQUNQLHFCQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDOUIsa0JBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDMUIsa0JBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCOzs7QUFkTSxnQkFBTTttQkFBQSxrQkFBRztBQUFDLHFCQUFPLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFBRTs7OztlQURsRCxNQUFNIiwiZmlsZSI6ImxvZ2luL2xvZ291dC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9