const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const dev = process.env.NODE_ENV !== 'production';
// console.log(process.env)
const app = next({dev})

const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();
    router.get('/b/:b', async ctx => {
        const b = ctx.params.b
        console.log('ctx------->', ctx)
        await handle(ctx.req, ctx.res, {
            pathname: '/b',
            query: {
                b,
                xyz: 123112
            }
        })
        ctx.response = false
    })
    server.use(router.routes())
    server.use(async (ctx, next) => {
        // console.log('ctx--------->', ctx);
        await handle(ctx.req, ctx.res);
        ctx.respond = false
    })
    server.listen(3050, () => {
        console.log('Koa server listening on 3000')
    })
})