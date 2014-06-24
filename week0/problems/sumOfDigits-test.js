"use strict";

var sumDig = require("./sumOfDigits").sumOfDigits;

exports.testSumOfDigits123 = function (test) {
    test.equal(6, sumDig(123));
    test.done();
};

exports.testSumOfDigits1325132435356 = function(test) {
  test.equal(43,sumDig(1325132435356));
  test.done();
};


exports.testSumOfDigits0 = function (test) {
    test.equal(0, sumDig(0));
    test.done();
};
