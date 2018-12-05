const Router = require('koa-router');
const router = new Router();
const UserController = require('../modules/controller/user');

router.use('/users', UserController.routes(), UserController.allowedMethods());

module.exports = router