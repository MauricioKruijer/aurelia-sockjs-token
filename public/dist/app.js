System.register(["aurelia-router", "bootstrap"], function (_export) {
  var Router, bootstrap, _createClass, _classCallCheck, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      //import {AuthorizeStep} from './auth';

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia";
            //config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.
            config.map([
            //{ route: 'sock-channels', moduleId: 'sock-channels', auth: true,  nav: true, title: "SockJS Channel example"},
            { route: "sock-channels", moduleId: "sock-channels", nav: true, title: "SockJS Channel example" }, { route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true },
            //{ route: 'login', moduleId: 'login', nav: true},
            { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }]);
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
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNQLFNBQVMsaUNBSUgsR0FBRzs7OztBQUxSLFlBQU0sa0JBQU4sTUFBTTs7QUFDUCxlQUFTOzs7Ozs7Ozs7OztBQUlILFNBQUc7QUFFSCxpQkFGQSxHQUFHLENBRUYsTUFBTSxFQUFFO2dDQUZULEdBQUc7O0FBR1osY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDOztBQUV6QixrQkFBTSxDQUFDLEdBQUcsQ0FBQzs7QUFFVCxjQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBQyxFQUNoRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxTQUFTLENBQUMsRUFBRyxRQUFRLEVBQUUsU0FBUyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxFQUNoRixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQVMsUUFBUSxFQUFFLFFBQVEsRUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFOztBQUUvRCxjQUFFLEtBQUssRUFBRSxjQUFjLEVBQUcsUUFBUSxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUUsQ0FDdEYsQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDO1NBQ0o7O3FCQWhCVSxHQUFHO0FBQ1AsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEekIsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==