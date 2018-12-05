const { asValue, createContainer } = require('awilix');
const Mongo = require('../core/database/mongo');
const container = createContainer();

container.register({
    db: asValue(Mongo())
})