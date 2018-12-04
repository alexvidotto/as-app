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
const container = createContainer();

container.register({
  // Inject application modules
  mailer : asValue(mailer, { lifetime: Lifetime.SINGLETON }),
  logger : asFunction(logger, { lifetime: Lifetime.SINGLETON })
})

// Container scope
// https://github.com/jeffijoe/awilix#containercreatescope
const ctxScope = container.createScope();

exports.setup = (koaapp) => {
  koaapp.use((ctx, next) => {
    // Provide escope to injected modules
    ctx.scope = ctxScope;
    return next();
  });
  // Logger to middleware request
  koaapp.use(koaLogger())
  // Provide API routes
  koaapp.use(routes.routes());
  koaapp.listen(process.env.APP_PORT, () => {
    ctxScope.resolve('logger')
      .info(`Server running on port ${process.env.APP_PORT}`);
  });
}