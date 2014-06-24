"use strict";

var sumOfDivisors = require("./sumOfDivisors").sumOfDivisors;

exports.testSumOfDivisors8 = function(test){
  test.equal(15, sumOfDivisors(8));
    test.done();
};

exports.testSumOfDivisors9 = function(test) {
  test.equal(13,sumOfDivisors(9));
  test.done();
};

exports.testSumOfDivisors7 = function(test) {
  test.equal(8,sumOfDivisors(7));
  test.done();
};

exports.testSumOfDivisors1000 = function(test) {
  test.equal(2340,sumOfDivisors(1000));
  test.done();
};

exports.testSumOfDivisors1 = function(test) {
  test.equal(1,sumOfDivisors(1));
  test.done();
};
