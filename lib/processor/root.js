module.exports = function(req,res,next){
  if (req.url == '/') {
    req.url = '/index.html'
  } else {
    next();
  }
}