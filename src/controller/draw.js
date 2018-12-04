const Router = require('koa-router');

var router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = { status: 'ok' }
});

module.exports = router;