const Router = require('koa-router');
const router = new Router();
const SVC_NAME = 'userService';

router.get('/', (ctx) => {
  const svc = ctx.scope.resolve(SVC_NAME);
  ctx.body = svc.query()
})

module.exports = router;