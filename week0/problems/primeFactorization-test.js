"use strict";

var primeFactorization = require("./primeFactorization").primeFactorization;

exports.testSumOfMinAndMax4 = function (test) {
    test.deepEqual([ [2, 1], [5, 1] ], primeFactorization(10));
    test.done();
};

exports.testSumOfMinAndMax10 = function(test) {
  test.deepEqual([ [2, 1], [7, 1] ],primeFactorization(14));
  test.done();
};


exports.testSumOfMinAndMax2 = function (test) {
    test.deepEqual([[2, 2], [89, 1] ], primeFactorization(356));
    test.done();
};

exports.testSumOfMinAndMax_3 = function (test) {
    test.deepEqual([ [89, 1] ], primeFactorization(89));
    test.done();
};

exports.testSumOfMinAndMax_4 = function (test) {
    test.deepEqual([ [2, 3], [5, 3] ], primeFactorization(1000));
    test.done();
};
