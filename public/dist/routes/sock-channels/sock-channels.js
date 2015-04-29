System.register(["../../appconfig", "sockjs-client", "token-sockjs-client", "../../services/auth"], function (_export) {
  var Appconfig, sock, TokenSocket, AuthenticationService, _createClass, _classCallCheck, SockChannels;

  return {
    setters: [function (_appconfig) {
      Appconfig = _appconfig.Appconfig;
    }, function (_sockjsClient) {
      sock = _sockjsClient.sock;
    }, function (_tokenSockjsClient) {
      TokenSocket = _tokenSockjsClient["default"];
    }, function (_servicesAuth) {
      AuthenticationService = _servicesAuth.AuthenticationService;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SockChannels = _export("SockChannels", (function () {
        function SockChannels(authenticationService) {
          _classCallCheck(this, SockChannels);

          this.authService = authenticationService;
          this.appConfig = new Appconfig();
          this.user = authenticationService.user;
          this.heading = "Hellooo";
        }

        _createClass(SockChannels, {
          activate: {
            value: function activate() {
              var _this = this;

              var user = this.user;

              this.username = user.name;

              var options = {
                host: this.appConfig.socketServer,
                tokenPath: "/socket/token",
                socketPrefix: "/sockets",
                reconnect: true,
                authentication: {
                  authuser: "User",
                  pin: "pinpin1234"
                }
              };
              this.socket = new TokenSocket(options);

              this.socket.ready(function (error) {
                if (error) {
                  console.log("Error creating websocket!", error);
                  return error;
                }
                console.log("connection made");

                _this.socket.subscribe(user.current_channel);
              });
            }
          },
          deactivate: {
            value: function deactivate() {
              this.socket.end(function () {
                console.log("socket connection closed");
              });
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [AuthenticationService];
            }
          }
        });

        return SockChannels;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9zb2NrLWNoYW5uZWxzL3NvY2stY2hhbm5lbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFNBQVMsRUFFVCxJQUFJLEVBQ0wsV0FBVyxFQUVWLHFCQUFxQixpQ0FFaEIsWUFBWTs7OztBQVBqQixlQUFTLGNBQVQsU0FBUzs7QUFFVCxVQUFJLGlCQUFKLElBQUk7O0FBQ0wsaUJBQVc7O0FBRVYsMkJBQXFCLGlCQUFyQixxQkFBcUI7Ozs7Ozs7OztBQUVoQixrQkFBWTtBQUVaLGlCQUZBLFlBQVksQ0FFWCxxQkFBcUIsRUFBRTtnQ0FGeEIsWUFBWTs7QUFHckIsY0FBSSxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQztBQUN6QyxjQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFDakMsY0FBSSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7QUFDdkMsY0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7U0FFMUI7O3FCQVJVLFlBQVk7QUFTdkIsa0JBQVE7bUJBQUEsb0JBQUc7OztBQUNULGtCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOztBQUVyQixrQkFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOztBQUUxQixrQkFBSSxPQUFPLEdBQUc7QUFDWixvQkFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWTtBQUNqQyx5QkFBUyxFQUFFLGVBQWU7QUFDMUIsNEJBQVksRUFBRSxVQUFVO0FBQ3hCLHlCQUFTLEVBQUUsSUFBSTtBQUNmLDhCQUFjLEVBQUU7QUFDZCwwQkFBUSxFQUFFLE1BQU07QUFDaEIscUJBQUcsRUFBRSxZQUFZO2lCQUNsQjtlQUNGLENBQUM7QUFDRixrQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdkMsa0JBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxFQUFJO0FBQ3pCLG9CQUFJLEtBQUssRUFBRTtBQUNULHlCQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hELHlCQUFPLEtBQUssQ0FBQztpQkFDZDtBQUNELHVCQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7O0FBRS9CLHNCQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2VBQzdDLENBQUMsQ0FBQzthQUVKOztBQUNELG9CQUFVO21CQUFBLHNCQUFHO0FBQ1gsa0JBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVc7QUFDekIsdUJBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztlQUN6QyxDQUFDLENBQUM7YUFDSjs7O0FBeENNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEdkMsWUFBWSIsImZpbGUiOiJyb3V0ZXMvc29jay1jaGFubmVscy9zb2NrLWNoYW5uZWxzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=