System.register(["sockjs-client", "token-sockjs-client"], function (_export) {
  var sock, TokenSocket, _createClass, _classCallCheck, Welcome, UpperValueConverter;

  return {
    setters: [function (_sockjsClient) {
      sock = _sockjsClient.sock;
    }, function (_tokenSockjsClient) {
      TokenSocket = _tokenSockjsClient["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Welcome = _export("Welcome", (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = "Welcome to the Aurelia Navigation App!";
          this.firstName = "John";
          this.lastName = "Doe";

          var options = {
            host: "http://localhost:3000",
            tokenPath: "/socket/token",
            socketPrefix: "/sockets",
            reconnect: true,
            authentication: {
              authuser: "aa",
              pin: "x0x8uldkj"
            }
          };
          var socket = new TokenSocket(options);
          socket.ready(function (error) {
            if (error) {
              console.log("Error creating websocket!", error);
              return error;
            }
            console.log("connection made");

            socket.subscribe("channelX");
          });
        }

        _createClass(Welcome, {
          fullName: {
            get: function () {
              return "" + this.firstName + " " + this.lastName;
            }
          },
          welcome: {
            value: function welcome() {
              alert("Welcome, " + this.fullName + "!");
            }
          }
        });

        return Welcome;
      })());
      UpperValueConverter = _export("UpperValueConverter", (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, {
          toView: {
            value: function toView(value) {
              return value && value.toUpperCase();
            }
          }
        });

        return UpperValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLElBQUksRUFDTCxXQUFXLGlDQUVMLE9BQU8sRUFzQ1AsbUJBQW1COzs7O0FBekN4QixVQUFJLGlCQUFKLElBQUk7O0FBQ0wsaUJBQVc7Ozs7Ozs7OztBQUVMLGFBQU87QUFDUCxpQkFEQSxPQUFPLEdBQ0w7Z0NBREYsT0FBTzs7QUFFaEIsY0FBSSxDQUFDLE9BQU8sR0FBRyx3Q0FBd0MsQ0FBQztBQUN4RCxjQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN4QixjQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzs7QUFHdEIsY0FBSSxPQUFPLEdBQUc7QUFDWixnQkFBSSxFQUFFLHVCQUF1QjtBQUM3QixxQkFBUyxFQUFFLGVBQWU7QUFDMUIsd0JBQVksRUFBRSxVQUFVO0FBQ3hCLHFCQUFTLEVBQUUsSUFBSTtBQUNmLDBCQUFjLEVBQUU7QUFDZCxzQkFBUSxFQUFFLElBQUk7QUFDZCxpQkFBRyxFQUFFLFdBQVc7YUFDakI7V0FDRixDQUFDO0FBQ0YsY0FBSSxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLEVBQUk7QUFDcEIsZ0JBQUksS0FBSyxFQUFFO0FBQ1QscUJBQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEQscUJBQU8sS0FBSyxDQUFDO2FBQ2Q7QUFDRCxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztBQUUvQixrQkFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztXQUM1QixDQUFDLENBQUE7U0FDTDs7cUJBM0JVLE9BQU87QUE2QmQsa0JBQVE7aUJBQUEsWUFBRTtBQUNaLDBCQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRzthQUM3Qzs7QUFFRCxpQkFBTzttQkFBQSxtQkFBRTtBQUNQLG1CQUFLLGVBQWEsSUFBSSxDQUFDLFFBQVEsT0FBSSxDQUFDO2FBQ3JDOzs7O2VBbkNVLE9BQU87O0FBc0NQLHlCQUFtQjtpQkFBbkIsbUJBQW1CO2dDQUFuQixtQkFBbUI7OztxQkFBbkIsbUJBQW1CO0FBQzlCLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBQztBQUNYLHFCQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDckM7Ozs7ZUFIVSxtQkFBbUIiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9