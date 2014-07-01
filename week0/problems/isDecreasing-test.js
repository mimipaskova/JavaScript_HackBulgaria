"use strict";

var isDecreasing = require("./isDecreasing").isDecreasing;

exports.testSumOfMinAndMax4 = function (test) {
    test.equal(false, isDecreasing([1,2,3]));
    test.done();
};

exports.testSumOfMinAndMax10 = function(test) {
  test.equal(false,isDecreasing([1,1,1,1]));
  test.done();
};


exports.testSumOfMinAndMax2 = function (test) {
    test.equal(true, isDecreasing([1]));
    test.done();
};

exports.testSumOfMinAndMax_3 = function (test) {
    test.equal(true, isDecreasing([5,4,3,2,1]));
    test.done();
};

exports.testSumOfMinAndMax_4 = function (test) {
    test.equal(true, isDecreasing([100, 50, 20]));
    test.done();
};

exports.testSumOfMinAndMax_5 = function (test) {
    test.equal(true, isDecreasing([5,3,-10]));
    test.done();
};
