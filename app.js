const Koa = require("koa")
const InitManager = require("./core/init")
const body = require('koa-bodyparser')
const catchError = require('./middlewares/exception')

const app = new Koa()

// 注册异常中间件
app.use(catchError)
// 注册parser
app.use(body())
// 注册路由
InitManager.initCore(app)


app.listen(8000)