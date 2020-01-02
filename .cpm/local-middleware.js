const fs=require('fs')
const path=require('path')

let cacheMiddleware=null;

module.exports=function localMiddleWare() {
  let middlewares=[];
  const basepath=path.join(__dirname, '../middleware');
  fs.readdirSync(basepath).map(function (file) {
    const filepath=path.join(basepath, file);
    const middleware=require(filepath);
    if (typeof(middleware)==='function') {
      middlewares.push(middleware);
    }
  });
  return middlewares;
}
