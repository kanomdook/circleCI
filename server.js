var app = require('./src/app');
var mongoose = require('./src/mongoose');
mongoose();
app.listen(3000, function () {
    console.log('server is running at port 3000');
});











// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(bodyParser.json());

// const MONGODB_URI = process.env.MONGO_DB_URI || process.env.MONGODB_URI || "mongodb://localhost/mydb"
// mongoose.set('debug', true);
// var db = mongoose.connect(MONGODB_URI, function (err) {
//     if (err) {
//         console.log('mongodb not connected...' + err);
//     } else {
//         console.log('mongodb connected...');
//     }
// });

// app.listen(3000, function () {
//     console.log('server is running at port 3000');
// });

// var Schema = mongoose.Schema;
// var ProductSchema = new Schema({
//     name: {
//         type: String
//     }
// });

// var ProductModel = mongoose.model('Product', ProductSchema);

// app.get('/', function (req, res) {
//     res.jsonp('welcome to product service');
// });

// app.get('/product', function (req, res) {
//     ProductModel.find({}).exec(function (err, result) {
//         if (err) {
//             res.jsonp(err);
//         } else {
//             res.jsonp({
//                 products: result
//             });
//         }
//     });
// });

// app.post('/product', function (req, res) {
//     var productModel = new ProductModel(req.body);
//     productModel.save(function (err, result) {
//         if (err) {
//             res.jsonp(err);
//         } else {
//             res.jsonp(result);
//         }
//     });
// });