var getNamespace = require('continuation-local-storage').getNamespace;
var createNamespace = require('continuation-local-storage').createNamespace;
var _namespace = 'rqd4aa06OSD22nD7';

function middleware(req, res, next) {
  var namespace = getNamespace(_namespace) || createNamespace(_namespace);
  namespace.bindEmitter(req);
  namespace.bindEmitter(res);
  namespace.run(function(){
    namespace.set('req', req);
    namespace.set('res', res);
    next();
  });
}
function getContext() {
   var namespace = getNamespace(_namespace);
  return {
    req: namespace.get('req'),
    res: namespace.get('res')
  };
}
module.exports.middleware = middleware;
module.exports.getContext = getContext;
