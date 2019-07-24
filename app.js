const Koa = require('koa')
const app = new Koa();
const InitManager = require('./core/init');
const catchError = require('./middlewares/exception');
require('module-alias/register');

InitManager.initCore(app);
app.use(catchError)

app.use(async ctx => {
    ctx.body = 'Hello word'
})

app.listen(3000);