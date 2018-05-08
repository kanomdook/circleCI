var assert = require('assert');
var calculator = require('../index');
describe('calculator', function () {
    it('test +', function (done) {
        assert.equal(calculator.plus(1, 1), 2);
        done();
    });
    it('test -', function (done) {
        assert.equal(calculator.minus(1, 1), 0);
        done();
    });
    it('test *', function (done) {
        assert.equal(calculator.multiply(1, 1), 1);
        done();
    });
    it('test ÷', function (done) {
        assert.equal(calculator.devide(1, 1), 1);
        done();
    });
});