const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost/mydb';

module.exports = function () {
    const MONGODB_URI = process.env.MONGO_DB_URI || process.env.MONGODB_URI || "mongodb://localhost/mydb"
    mongoose.set('debug', true);
    var db = mongoose.connect(MONGODB_URI, function (err) {
        if (err) {
            console.log('mongodb not connected...' + err);
        } else {
            console.log('mongodb connected...');
        }
    });

   return db;
};