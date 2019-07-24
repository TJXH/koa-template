//生成token令牌函数，uid为用户id，scope为权限等级(类型为数字，内部约定)
const generateToken = function(uid, scope){
    const { secretKey, expiresIn } = global.config.security
    //第一个参数为用户信息的js对象，第二个为用来生成token的key值，第三个为配置项
    const token = jwt.sign({
        uid,
        scope
    },secretKey,{
        expiresIn
    })
    return token
}