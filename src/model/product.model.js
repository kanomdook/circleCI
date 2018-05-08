const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    name: {
        type: String
    }
});

module.exports = mongoose.model('product', ProductSchema);