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

  return socketServer;
};