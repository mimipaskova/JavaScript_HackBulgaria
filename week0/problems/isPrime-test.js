"use strict";

var isPrime = require("./isPrime").isPrime;

exports.testisPrime8 = function(test){
  test.equal(false, isPrime(8));
    test.done();
};

exports.testisPrime9 = function(test) {
  test.equal(false,isPrime(9));
  test.done();
};

exports.testisPrime7 = function(test) {
  test.equal(true,isPrime(7));
  test.done();
};

exports.testisPrime1000 = function(test) {
  test.equal(false,isPrime(1000));
  test.done();
};

exports.testisPrime1 = function(test) {
  test.equal(true,isPrime(1));
  test.done();
};
