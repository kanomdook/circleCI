const request = require('supertest');
const mongoose = require('mongoose');
var assert = require('assert');
var should = require('should');
const app = require('../src/app');

describe('express test', function () {
    before(function (done) {
        mongoose.connect('mongodb://localhost/mydb', function (error) {
            if (error) console.error('Error while connecting:\n%\n', error);
            done();
        });
    });

    it('GET /', function (done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('hello')
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('GET /product', function (done) {
        request(app)
            .get('/product')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('POST /product', function (done) {
        request(app)
            .post('/product')
            .set('Accept', 'application/json')
            .send({
                name: 'ลาเต้'
            })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                (res.body.name).should.match('ลาเต้');
                done();
            });
    });

    it('PUT /product', function (done) {
        request(app)
            .put('/product/5ad80dd77289051e9859cd4d')
            .set('Accept', 'application/json')
            .send({
                name: 'dook1'
            })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('DELETE /product', function (done) {
        request(app)
            .delete('/product/5ad80dd77289051e9859cd4d')
            .set('Accept', 'application/json')
            .expect(200)
            .expect({})
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    after(function (done) {
        mongoose.disconnect(function () {
            done();
        });
    });
});