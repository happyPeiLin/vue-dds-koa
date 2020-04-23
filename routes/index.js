const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  global.console.log("fuck")
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})


router.get('/woaini', async (ctx, next) => {
  ctx.body = "wo8aini"
})


module.exports = router
