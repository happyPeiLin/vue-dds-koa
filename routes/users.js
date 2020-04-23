const router = require('koa-router')()
const Person = require('../shujuku/models/person')
const Fenshu = require('../shujuku/models/score')
const Group = require('../shujuku/models/scoreGroup')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/score', async function(ctx) {
  // const person = new Person({name: ctx.request.body.name, age: ctx.request.body.age})
  const fenshu = new Fenshu({fenshu: ctx.request.body.fenshu})
  let code
  try {
    await fenshu.save()
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code: code
  }
})


router.post('/add', async function(ctx) {
  // const person = new Person({name: ctx.request.body.name, age: ctx.request.body.age})
  const group = new Group({name: ctx.request.body.name, score:ctx.request.body.score})
  let code
  try {
    await group.save()
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code: code
  }
})

router.get('/get', async function (ctx) {
  console.log('get被调用了！！！！！！！！！！！！！')
  const result = await Group.find({ name: ctx.request.body.name})   //model中的find()方法
  // let code
  // try {
  //   if (JSON.stringify(req) === '[]') {    //如果去找返回是个空数组，意思是没找到，code返回为-2
  //     code = -2
  //   }else{   //找到了返回0
  //     code=0
  //   }
  // } catch (error) {  //报错返回-1
  //   code = -1
  // }
  ctx.body = {
    code:0,
    result
  }
})

router.post('/getPerson', async function(ctx) {
  const results = await Person.find({type: ctx.request.body.type})
  ctx.body = {
    code: 0,
    results
  }
})


router.post('/addPerson', async function(ctx) {
  const person = new Person({name: ctx.request.body.name, age: ctx.request.body.age, type:ctx.request.body.type, time:ctx.request.body.time})
  let code
  try {
    await person.save()
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code: code
  }
})



module.exports = router
