const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const json = require('koa-json')


const app = new Koa()
const router = new Router()

router.prefix('/api')

router.post('/user', async (ctx) => {
    const { body, header } = ctx.request;
    console.log(body, header);

    if(!body.name || !body.email) {
        ctx.body = {
            'code': 404,
            'msg': 'name和email不得为空'
        }
    }
    else if(header.role == undefined || header.role != 'admin') {
        ctx.body = {
            'code': 401,
            'msg': 'unauthorized post'
        }
    }
    else {
        ctx.body = {
            'code': 200,
            'data': {
                ...body
            },
            'msg': '上传成功'
        }
    }


})


app.use(koaBody())
app.use(cors())

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(8091)