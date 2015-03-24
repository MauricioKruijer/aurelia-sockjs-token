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
              //this.socket = socket;
              //this.socket.end(function() {
              //  console.log("connection closed");
              //});

              //socket.ready(error => {
              //  if (error) {
              //    console.log("Error creating websocket!", error);
              //    return error;
              //  }
              //  console.log("connection made");
              //
              //  socket.subscribe("channelX");
              //});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2stY2hhbm5lbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFNBQVMsRUFFVCxJQUFJLEVBQ0wsV0FBVyxpQ0FJTCxZQUFZOzs7O0FBUGpCLGVBQVMsY0FBVCxTQUFTOztBQUVULFVBQUksaUJBQUosSUFBSTs7QUFDTCxpQkFBVzs7Ozs7Ozs7Ozs7QUFJTCxrQkFBWTs7O0FBR1osaUJBSEEsWUFBWSxHQUdUO2dDQUhILFlBQVk7OztBQUtyQixjQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7O0FBRWpDLGNBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBRTFCOztxQkFUVSxZQUFZO0FBVXZCLGtCQUFRO21CQUFBLG9CQUFHOzs7QUFHVCxrQkFBSSxPQUFPLEdBQUc7O0FBRVosb0JBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVk7QUFDakMseUJBQVMsRUFBRSxlQUFlO0FBQzFCLDRCQUFZLEVBQUUsVUFBVTtBQUN4Qix5QkFBUyxFQUFFLElBQUk7QUFDZiw4QkFBYyxFQUFFO0FBQ2QsMEJBQVEsRUFBRSxNQUFNO0FBQ2hCLHFCQUFHLEVBQUUsWUFBWTtpQkFDbEI7ZUFDRixDQUFDO0FBQ0Ysa0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OzthQWdCeEM7O0FBQ0Qsb0JBQVU7bUJBQUEsc0JBQUc7QUFDWCxrQkFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBVztBQUN6Qix1QkFBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2VBQ3pDLENBQUMsQ0FBQzthQUNKOzs7O2VBN0NVLFlBQVkiLCJmaWxlIjoic29jay1jaGFubmVscy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9