System.register(["../../services/auth", "aurelia-router"], function (_export) {
  var AuthenticationService, AppRouter, _createClass, _classCallCheck, Logout;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9sb2dpbi9sb2dvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLHFCQUFxQixFQUNyQixTQUFTLGlDQUVKLE1BQU07Ozs7QUFIWCwyQkFBcUIsaUJBQXJCLHFCQUFxQjs7QUFDckIsZUFBUyxrQkFBVCxTQUFTOzs7Ozs7Ozs7QUFFSixZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLFdBQVcsRUFBRSxTQUFTLEVBQUU7Z0NBRnpCLE1BQU07O0FBR2YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsY0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDNUI7O3FCQUxVLE1BQU07QUFNakIsa0JBQVE7bUJBQUEsb0JBQUc7QUFDVCxrQkFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO0FBQ3pCLG9CQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztlQUNuQzthQUNGOztBQUNELGdCQUFNO21CQUFBLGtCQUFHO0FBQ1AscUJBQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QixrQkFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMxQixrQkFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDOUI7OztBQWRNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUMscUJBQU8sQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUFFOzs7O2VBRGxELE1BQU0iLCJmaWxlIjoicm91dGVzL2xvZ2luL2xvZ291dC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9