function load(query) {
  // 判断是本地路径还是组件库
  // 根据properties.type决定加载方式
  // 项目类型需要子进程启动
}

module.exports=function loadComponent(req, res, next) {
  // local machine
  if (req.ip==='127.0.0.1' || req.host==='localhost') {
    if (req.url==='/load') {
      console.log(req.params);
      const result={};
      const directory=req.params['directory'];
      if (directory) {
        result.code=1;
        result.data=load(directory);
      } else {
        result.code=0;
        result.message='miss path';
      }
      res.json(result);
    }
  }
  next();
}
