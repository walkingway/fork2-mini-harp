var connect = require("connect");
var serveStatic = require('serve-static');
var useJade = require('./lib/processor/jade');
var useLess = require('./lib/processor/less');

module.exports = function(root) {
  var app = connect();
  app.use(serveStatic(root))
     .use(function (req, res, next) {
        if (req.url == '/current-time') {
          res.end((new Date()).toISOString());
        } else {
          next();
        }
      })
     .use(useJade(root))
     .use(useLess(root));
  return app;
}