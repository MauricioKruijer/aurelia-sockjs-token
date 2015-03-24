System.register(["./appconfig", "sockjs-client", "token-sockjs-client"], function (_export) {
  var Appconfig, sock, TokenSocket, _createClass, _classCallCheck, SockChannels;

  return {
    setters: [function (_appconfig) {
      Appconfig = _appconfig.Appconfig;
    }, function (_sockjsClient) {
      sock = _sockjsClient.sock;
    }, function (_tokenSockjsClient) {
      TokenSocket = _tokenSockjsClient["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      //import {AuthenticationService} from './auth';

      SockChannels = _export("SockChannels", (function () {
        //static inject() { return[AuthenticationService]; }
        //constructor(authenticationService) {
        function SockChannels() {
          _classCallCheck(this, SockChannels);

          //this.authService = authenticationService;
          this.appConfig = new Appconfig();
          //this.user = authenticationService.user;
          this.heading = "Hellooo";
        }

        _createClass(SockChannels, {
          activate: {
            value: function activate() {
              var _this = this;

              //this.username = this.user.name;
              //console.log(this.appconfig.socketServer);
              var options = {
                //host: "http://localhost:3000",
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
        });

        return SockChannels;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2stY2hhbm5lbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFNBQVMsRUFFVCxJQUFJLEVBQ0wsV0FBVyxpQ0FJTCxZQUFZOzs7O0FBUGpCLGVBQVMsY0FBVCxTQUFTOztBQUVULFVBQUksaUJBQUosSUFBSTs7QUFDTCxpQkFBVzs7Ozs7Ozs7Ozs7QUFJTCxrQkFBWTs7O0FBR1osaUJBSEEsWUFBWSxHQUdUO2dDQUhILFlBQVk7OztBQUtyQixjQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7O0FBRWpDLGNBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBRTFCOztxQkFUVSxZQUFZO0FBVXZCLGtCQUFRO21CQUFBLG9CQUFHOzs7OztBQUdULGtCQUFJLE9BQU8sR0FBRzs7QUFFWixvQkFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWTtBQUNqQyx5QkFBUyxFQUFFLGVBQWU7QUFDMUIsNEJBQVksRUFBRSxVQUFVO0FBQ3hCLHlCQUFTLEVBQUUsSUFBSTtBQUNmLDhCQUFjLEVBQUU7QUFDZCwwQkFBUSxFQUFFLE1BQU07QUFDaEIscUJBQUcsRUFBRSxZQUFZO2lCQUNsQjtlQUNGLENBQUM7QUFDRixrQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdkMsa0JBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxFQUFJO0FBQ3pCLG9CQUFJLEtBQUssRUFBRTtBQUNULHlCQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hELHlCQUFPLEtBQUssQ0FBQztpQkFDZDtBQUNELHVCQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7O0FBRS9CLHNCQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7ZUFDbkMsQ0FBQyxDQUFDO2FBRUo7O0FBQ0Qsb0JBQVU7bUJBQUEsc0JBQUc7QUFDWCxrQkFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBVztBQUN6Qix1QkFBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2VBQ3pDLENBQUMsQ0FBQzthQUNKOzs7O2VBekNVLFlBQVkiLCJmaWxlIjoic29jay1jaGFubmVscy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9