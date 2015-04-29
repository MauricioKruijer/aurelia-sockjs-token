var redis             = require("redis"),
    sockjs            = require("sockjs"),
    TokenSocketServer = require("node-token-sockjs");

module.exports = function (app) {
  var socketServer = sockjs.createServer();
  var redisClient = redis.createClient(),
      pubsubClient = redis.createClient();

  var socketOptions = {
    prefix : "/sockets"
  };

  var tokenServer = new TokenSocketServer(app, redisClient, socketServer, {
    prefix         : socketOptions.prefix,
    tokenRoute     : "/socket/token",
    pubsubClient   : pubsubClient,
    authentication : function (req, callback) {
      var auth = {
        username : "Mauricio",
        passhash : "Mwuahah"
      };
      return callback(null, auth);
    },
    debug          : app.get("env") !== "production"
  });
  tokenServer.on("authentication", function (socket, auth, callback) {
    console.log("auuuthhhh");
    callback();
  });
  setInterval(function() {
    tokenServer.publish("ChannelX", {

      picture: "https://pbs.twimg.com/profile_images/2895991891/2149aaee0715728d60c3d621fba8df73_normal.png",
      name: 'MauricioKruijer',
      status: 'online',
      countNewMessages: 1

    });tokenServer.publish("ChannelY", {

      picture: "https://pbs.twimg.com/profile_images/2895991891/2149aaee0715728d60c3d621fba8df73_normal.png",
      name: 'MauricioKruijer',
      status: 'online',
      countNewMessages: 1

    });tokenServer.publish("ChannelZ", {

      picture: "https://pbs.twimg.com/profile_images/2895991891/2149aaee0715728d60c3d621fba8df73_normal.png",
      name: 'MauricioKruijer',
      status: 'online',
      countNewMessages: 1

    });
    console.log("PUBLISHED TO CHANNELX");
  }, 2000);
  return socketServer;
};