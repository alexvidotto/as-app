
const UserService = require('../services/UserService');
const UserModel  = require('../models/UserModel');
const { asValue, asClass } = require('awilix')

const dependencies = {
    userModel: asValue(UserModel),
    userService: asClass(UserService),
}

module.exports = dependencies;