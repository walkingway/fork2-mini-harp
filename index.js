var connect = require("connect");
var serveStatic = require('serve-static');
var useJade = require('./lib/processor/jade');
var useLess = require('./lib/processor/less');
var rootReq = require('./lib/processor/root');
var useReject = require('./lib/processor/reject');

module.exports = function(root) {
  var app = connect();
  app.use(useReject)
     .use(function(req, res, next) {
        if (req.url == '/current-time') {
          res.end((new Date()).toISOString());
        } else {
          next();
        }
      })
     .use(rootReq)
     .use(serveStatic(root))
     .use(useJade(root))
     .use(useLess(root));
  return app;
}