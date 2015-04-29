System.register(["aurelia-http-client"], function (_export) {
  var HttpClient, _createClass, _classCallCheck, url, Flickr;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json";
      Flickr = _export("Flickr", (function () {
        function Flickr(http) {
          _classCallCheck(this, Flickr);

          this.heading = "Flickr";
          this.images = [];
          this.http = http;
        }

        _createClass(Flickr, {
          activate: {
            value: function activate() {
              var _this = this;

              return this.http.jsonp(url).then(function (response) {
                _this.images = response.content.items;
              });
            }
          },
          canDeactivate: {
            value: function canDeactivate() {
              return confirm("Are you sure you want to leave?");
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [HttpClient];
            }
          }
        });

        return Flickr;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9mbGlja3IvZmxpY2tyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxVQUFVLGlDQUVkLEdBQUcsRUFFTSxNQUFNOzs7O0FBSlgsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7Ozs7O0FBRWQsU0FBRyxHQUFHLDZGQUE2RjtBQUUxRixZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLElBQUksRUFBQztnQ0FGTixNQUFNOztBQUdmLGNBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOztxQkFOVSxNQUFNO0FBUWpCLGtCQUFRO21CQUFBLG9CQUFFOzs7QUFDUixxQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDM0Msc0JBQUssTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2VBQ3RDLENBQUMsQ0FBQzthQUNKOztBQUVELHVCQUFhO21CQUFBLHlCQUFFO0FBQ2IscUJBQU8sT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7YUFDbkQ7OztBQWZNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFFOzs7O2VBRDdCLE1BQU0iLCJmaWxlIjoicm91dGVzL2ZsaWNrci9mbGlja3IuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==