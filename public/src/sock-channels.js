import {Appconfig} from './appconfig';

import {sock} from 'sockjs-client';
import TokenSocket from 'token-sockjs-client';

//import {AuthenticationService} from './auth';

export class SockChannels {
  //static inject() { return[AuthenticationService]; }
  //constructor(authenticationService) {
  constructor() {
    //this.authService = authenticationService;
    this.appConfig = new Appconfig();
    //this.user = authenticationService.user;
    this.heading = "Hellooo";

  }
  activate() {
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
  deactivate() {
    this.socket.end(function() {
      console.log("socket connection closed");
    });
  }
}