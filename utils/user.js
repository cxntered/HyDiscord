const mongoose = require('mongoose');

const User = new mongoose.Schema({
    id: String,
    uuid: String
});

module.exports = mongoose.model('user', User);