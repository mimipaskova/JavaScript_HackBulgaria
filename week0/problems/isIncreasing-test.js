"use strict";

var isIncreasing = require("./isIncreasing").isIncreasing;

exports.testSumOfMinAndMax4 = function (test) {
    test.equal(true, isIncreasing([1,2,3]));
    test.done();
};

exports.testSumOfMinAndMax10 = function(test) {
  test.equal(false,isIncreasing([1,1,1,1]));
  test.done();
};


exports.testSumOfMinAndMax2 = function (test) {
    test.equal(true, isIncreasing([1]));
    test.done();
};

exports.testSumOfMinAndMax_2 = function (test) {
    test.equal(false, isIncreasing([5,6,-10]));
    test.done();
};
