const env = require('../core/env');
// Load application variables
env.load();

// AWILIX choosed as my IoC framework.
// https://github.com/jeffijoe/awilix
const { asValue, asFunction, Lifetime, createContainer } = require('awilix');

const logger    = require('../core/logger/winston');
const mailer    = require('../core/mailer');
const routes    = require('../../routes/api');
const koaLogger = require('koa-logger');
const serviceFactory = require('./service')
const container = createContainer();

// Inject commom modules to the application
container.register({
  mailer : asValue(mailer, { lifetime: Lifetime.SINGLETON }),
  logger : asFunction(logger, { lifetime: Lifetime.SINGLETON })
})

// Inject service modules
container.register(serviceFactory)

// Setup data access
require('../factory/database')

exports.setup = (koaapp) => {
  // Provide scope container to Koa context
  koaapp.use((ctx, next) => {
    ctx.scope = container.createScope();
    next();
  })
  // Logger to middleware request
  koaapp.use(koaLogger());
  // Provide API routes
  koaapp.use(routes.routes());
  koaapp.listen(process.env.APP_PORT, () => {
    container.resolve('logger')
      .info(`Server running on port ${process.env.APP_PORT}`);
  });
}