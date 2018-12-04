// KOA to provide http server and REST operations
const Koa = require('koa');
const app = new Koa();

// Setup server - Globals, DI, routes
const { setup } = require('./modules/factory/application');
setup(app);