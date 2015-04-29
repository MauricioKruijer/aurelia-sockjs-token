System.register(["aurelia-router"], function (_export) {
  var Router, _createClass, _classCallCheck, ChildRouter;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ChildRouter = _export("ChildRouter", (function () {
        function ChildRouter(router) {
          _classCallCheck(this, ChildRouter);

          this.heading = "Child Router";
          this.router = router;
          router.configure(function (config) {
            config.map([{ route: ["", "welcome"], moduleId: "../welcome/welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "../flickr/flickr", nav: true }, { route: "child-router", moduleId: "./child-router", nav: true, title: "Child Router" }]);
          });
        }

        _createClass(ChildRouter, null, {
          inject: {
            value: function inject() {
              return [Router];
            }
          }
        });

        return ChildRouter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9jaGlsZC1yb3V0ZXIvY2hpbGQtcm91dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxNQUFNLGlDQUVELFdBQVc7Ozs7QUFGaEIsWUFBTSxrQkFBTixNQUFNOzs7Ozs7Ozs7QUFFRCxpQkFBVztBQUVYLGlCQUZBLFdBQVcsQ0FFVixNQUFNLEVBQUM7Z0NBRlIsV0FBVzs7QUFHcEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFDOUIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDekIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxTQUFTLENBQUMsRUFBRyxRQUFRLEVBQUUsb0JBQW9CLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFFLEVBQzNGLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBUyxRQUFRLEVBQUUsa0JBQWtCLEVBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxFQUN6RSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUcsUUFBUSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGNBQWMsRUFBRSxDQUN4RixDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7cUJBWlUsV0FBVztBQUNmLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUFFOzs7O2VBRHpCLFdBQVciLCJmaWxlIjoicm91dGVzL2NoaWxkLXJvdXRlci9jaGlsZC1yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==