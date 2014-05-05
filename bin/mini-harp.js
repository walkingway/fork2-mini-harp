#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var createMiniHarp = require("mini-harp")
  , app = createMiniHarp();
app.use(function (req, res, next) {
      if (req.url === '/current-time') {
        res.end((new Date()).toISOString());
      } else {
        next();
      }
    });
var num = argv["port"];
if (num){
  console.log("Starting mini-harp on http://localhost:%d", num);
  app.listen(num);
} else {
  console.log("Starting mini-harp on http://localhost:4000");
  app.listen(4000);
}