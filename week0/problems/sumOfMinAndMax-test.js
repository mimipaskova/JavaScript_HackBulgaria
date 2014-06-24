"use strict";

var sumOfMinAndMax = require("./sumOfMinAndMax").sumOfMinAndMax;

exports.testSumOfMinAndMax4 = function (test) {
    test.equal(4, sumOfMinAndMax([1,2,3]));
    test.done();
};

exports.testSumOfMinAndMax10 = function(test) {
  test.equal(10,sumOfMinAndMax([1,2,3,4,5,6,8,9]));
  test.done();
};


exports.testSumOfMinAndMax2 = function (test) {
    test.equal(2, sumOfMinAndMax([1]));
    test.done();
};

exports.testSumOfMinAndMax_2 = function (test) {
    test.equal(90, sumOfMinAndMax([-10,5,10,100]));
    test.done();
};
