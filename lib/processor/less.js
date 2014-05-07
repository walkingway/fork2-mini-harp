var fs = require('fs');
var path = require('path');
var less = require('less');

module.exports = makeLess;

function makeLess(root) {
  return function(req, res, next){
    if(path.extname(req.url) == '.css'){
      var lessPath = root + '/' + path.basename(req.url, '.css') + '.less';
      if(fs.existsSync(lessPath)){
        fs.readFile(lessPath,{encoding: "utf8"},function(err, lessFile){
          less.render(lessFile, {}, function(err, css){
            if(err) throw err;
            res.setHeader('Content-Type', 'text/css; charset=UTF-8');
            res.setHeader('Content-Length', css.length);
            res.end(css);
          });
        });
        
      } else {
        res.setHeader('Content-Type', 'text/css; charset=UTF-8');
        res.statusCode = 404;
        res.end();
      }
    } else {
      next();
      }
  }
}