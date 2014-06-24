"use strict";

var primeNumberOfDivisors = require("./primeNumberOfDivisors").primeNumberOfDivisors;

exports.testisPrimeDiv8 = function(test){
  test.equal(false, primeNumberOfDivisors(8));
    test.done();
};

exports.testisPrimeDiv9 = function(test) {
  test.equal(true,primeNumberOfDivisors(9));
  test.done();
};

exports.testisPrimeDiv7 = function(test) {
  test.equal(true,primeNumberOfDivisors(7));
  test.done();
};
