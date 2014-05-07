var fs = require('fs');
var path = require('path');
var jade = require('jade');

module.exports = function (root) {
  return function(req, res, next){
    if(path.extname(req.url) == '.html'){
      //var jadePath = path.join(root, path.basename(req.url,'.html') + '.jade');
      var jadePath = root + '/' + path.basename(req.url, '.html') + '.jade';
      if(fs.existsSync(jadePath)){
        jade.renderFile(jadePath, {}, function(err, html){
          if(err) throw err;
          res.setHeader('Content-Type', 'text/html; charset=UTF-8');
          res.setHeader('Content-Length', html.length);
          res.end(html);
        });
      } else {
        res.setHeader('Content-Type', 'text/html;charset=UTF-8');

        res.statusCode = 404;
        res.end();
      }    
    } else {
      next();
      }
  }
}