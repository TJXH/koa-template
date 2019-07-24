const Router = require('koa-router')
const router = new Router()
const { HttpException } = require('../core/http-exception')
const Auth = require('../middlewares/auth')

router.post('/user', new Auth().m ,(ctx, next) => {
    if(true){
        const error = new HttpException('网络请求错误', 10001, 400)
        throw error
  }
})