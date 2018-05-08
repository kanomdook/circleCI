const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const ProductModel = require('./model/product.model');

app.get('/', function (req, res) {
    res.send('hello');
});

app.get('/product', function (req, res) {
    ProductModel.find({}).exec(function (err, result) {
        if (err) {
            res.jsonp(err);
        } else {
            res.jsonp(result);
        }
    });
});

app.post('/product', function (req, res) {
    var product = new ProductModel(req.body);
    product.save(function (err, result) {
        if (err) {
            res.jsonp(err);
        } else {
            res.jsonp(result);
        }
    });
});

app.put('/product/:id', function (req, res) {
    res.jsonp(req.product);
});

app.delete('/product/:id', function (req, res) {
    res.jsonp(req.body);
});

app.param('id', function (req, res, next, id) {
    ProductModel.findById(id).exec(function (err, result) {
        if (err) {
            res.jsonp(err);
        } else {
            req.product = result;
            next();
        }
    });
});

module.exports = app;
