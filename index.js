var connect = require("connect");
var serveStatic = require('serve-static');

module.exports = function(root) {
  var app = connect();
  app.use(serveStatic(root))
     .use(function (req, res, next) {
        if (req.url == '/current-time') {
          res.end((new Date()).toISOString());
        } else {
          next();
        }
      });
  return app;
}