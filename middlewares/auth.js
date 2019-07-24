const basicAuth = require('basic-auth');
const jwt = require('jsonwebtoken');

class Auth {
  constructor(level) {
    Auth.USER = 8;
    Auth.ADMIN = 16;
    this.level = level || 1;
  }
  //注意这里的m是一个属性
  get m() {
    return async (ctx, next) => {
      const userToken = basicAuth(ctx.req);
      let errMsg = 'token不合法';

      if(!userToken || !userToken.name) {
        throw new global.errs.Forbidden();
      }
      try {
        //将前端传过来的token值进行认证，如果成功会返回一个decode对象，包含uid和scope
        var decode = jwt.verify(userToken.name, global.config.security.secretKey);
      } catch (error) {
        // token不合法
        // 或token过期
        // 抛异常
        errMsg = '//根据情况定义'
        throw new global.errs.Forbidden(errMsg);
      }
      //将uid和scope挂载ctx中
      ctx.auth = {
        uid: decode.uid,
        scope: decode.scope
      };
      //现在走到这里token认证通过
      await next();
    }
  }
}
module.exports = Auth;