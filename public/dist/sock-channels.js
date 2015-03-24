System.register(["./appconfig", "sockjs-client", "token-sockjs-client", "./auth"], function (_export) {
  var Appconfig, sock, TokenSocket, AuthenticationService, _createClass, _classCallCheck, SockChannels;

  return {
    setters: [function (_appconfig) {
      Appconfig = _appconfig.Appconfig;
    }, function (_sockjsClient) {
      sock = _sockjsClient.sock;
    }, function (_tokenSockjsClient) {
      TokenSocket = _tokenSockjsClient["default"];
    }, function (_auth) {
      AuthenticationService = _auth.AuthenticationService;
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

              this.username = this.user.name;

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

                _this.socket.subscribe("channelX");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2stY2hhbm5lbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFNBQVMsRUFFVCxJQUFJLEVBQ0wsV0FBVyxFQUVWLHFCQUFxQixpQ0FFaEIsWUFBWTs7OztBQVBqQixlQUFTLGNBQVQsU0FBUzs7QUFFVCxVQUFJLGlCQUFKLElBQUk7O0FBQ0wsaUJBQVc7O0FBRVYsMkJBQXFCLFNBQXJCLHFCQUFxQjs7Ozs7Ozs7O0FBRWhCLGtCQUFZO0FBRVosaUJBRkEsWUFBWSxDQUVYLHFCQUFxQixFQUFFO2dDQUZ4QixZQUFZOztBQUdyQixjQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDO0FBQ3pDLGNBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUNqQyxjQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQztBQUN2QyxjQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztTQUUxQjs7cUJBUlUsWUFBWTtBQVN2QixrQkFBUTttQkFBQSxvQkFBRzs7O0FBQ1Qsa0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O0FBRS9CLGtCQUFJLE9BQU8sR0FBRztBQUNaLG9CQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO0FBQ2pDLHlCQUFTLEVBQUUsZUFBZTtBQUMxQiw0QkFBWSxFQUFFLFVBQVU7QUFDeEIseUJBQVMsRUFBRSxJQUFJO0FBQ2YsOEJBQWMsRUFBRTtBQUNkLDBCQUFRLEVBQUUsTUFBTTtBQUNoQixxQkFBRyxFQUFFLFlBQVk7aUJBQ2xCO2VBQ0YsQ0FBQztBQUNGLGtCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV2QyxrQkFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLEVBQUk7QUFDekIsb0JBQUksS0FBSyxFQUFFO0FBQ1QseUJBQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEQseUJBQU8sS0FBSyxDQUFDO2lCQUNkO0FBQ0QsdUJBQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7QUFFL0Isc0JBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztlQUNuQyxDQUFDLENBQUM7YUFFSjs7QUFDRCxvQkFBVTttQkFBQSxzQkFBRztBQUNYLGtCQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFXO0FBQ3pCLHVCQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7ZUFDekMsQ0FBQyxDQUFDO2FBQ0o7OztBQXRDTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUFFOzs7O2VBRHZDLFlBQVkiLCJmaWxlIjoic29jay1jaGFubmVscy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9