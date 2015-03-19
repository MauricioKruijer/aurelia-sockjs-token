import {sock} from 'sockjs-client';
import TokenSocket from 'token-sockjs-client';

export class Welcome{
  constructor(){
    this.heading = 'Welcome to the Aurelia Navigation App!';
    this.firstName = 'John';
    this.lastName = 'Doe';


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
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  welcome(){
    alert(`Welcome, ${this.fullName}!`);
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
