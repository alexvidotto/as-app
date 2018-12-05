const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String
});

module.exports = mongoose.model('UserModel', UserSchema);