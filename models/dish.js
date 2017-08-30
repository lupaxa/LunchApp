var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: String,
    price: Number,
});
module.exports = mongoose.model('dish', schema);