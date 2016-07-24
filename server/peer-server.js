var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var privateKey  = fs.readFileSync('../sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('../sslcert/server.crt', 'utf8');

var server = PeerServer({
  port: 9000,
  path: '/peerjs',
  ssl: {
    key: privateKey,
    cert: certificate
  }
});