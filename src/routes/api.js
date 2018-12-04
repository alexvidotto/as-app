const Router = require('koa-router');

const userAPI = require('../controller/user');
const drawAPI = require('../controller/draw');
const router = new Router();
 
router.use('/users', userAPI.routes(), userAPI.allowedMethods());
router.use('/draw', drawAPI.routes(), drawAPI.allowedMethods());

module.exports = router;