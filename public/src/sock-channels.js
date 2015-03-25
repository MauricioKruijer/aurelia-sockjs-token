import {Appconfig} from './appconfig';

import {sock} from 'sockjs-client';
import TokenSocket from 'token-sockjs-client';

import {AuthenticationService} from './auth';

export class SockChannels {
  static inject() { return[AuthenticationService]; }
  constructor(authenticationService) {
    this.authService = authenticationService;
    this.appConfig = new Appconfig();
    this.user = authenticationService.user;
    this.heading = "Hellooo";

  }
  activate() {
    let user = this.user;

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

    this.socket.ready(error => {
      if (error) {
        console.log("Error creating websocket!", error);
        return error;
      }
      console.log("connection made");

      this.socket.subscribe(user.current_channel);
    });

  }
  deactivate() {
    this.socket.end(function() {
      console.log("socket connection closed");
    });
  }
}