"use strict";

var listToNumber =require("./listToNumber").listToNumber;

exports.testSumOfMinAndMax4 = function (test) {
    test.deepEqual(123, listToNumber([1, 2, 3]));
    test.done();
};

exports.testSumOfMinAndMax10 = function(test) {
  test.deepEqual(99999,listToNumber([9, 9, 9, 9, 9]));
  test.done();
};


exports.testSumOfMinAndMax2 = function (test) {
    test.deepEqual(123023, listToNumber([1, 2, 3, 0, 2, 3]));
    test.done();
};

