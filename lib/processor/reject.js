var path = require('path');

module.exports = function(req, res, next){
  var extname = path.extname(req.url);
  if(extname == '.jade' || extname == '.less') {
        res.statusCode = 404;
        console.log(res.statusCode);
        res.end();
  }
  next();
}
