module.exports = {
    environment: 'dev',
    database: {
        dbName: 'island',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'fjfj'
    },
    security: {
        secretKey: 'lajsdflsdjfljsdljfls',//用来生成token的key值
        expiresIn: 60 * 60//过期时间
    }
}
