"use strict";

var sum = require("./sumNumbers").sum;
var myConcat = require("./sumNumbers").myConcat;

exports.testSum15 = function (test) {
    test.equal(15, sum(10,5));
    test.done();
};

exports.testSum18 = function(test) {
  test.equal(18,sum(14,4));
  test.done();
};


exports.testConcatMimi = function (test) {
    test.deepEqual("mimi hack", myConcat("mimi", "hack"));
    test.done();
};

exports.testConcatWrong = function (test) {
    test.equal("lqlq mimi", myConcat("lqlq", "mimi"));
    test.done();
};

exports.testConcatRado = function (test) {
    test.deepEqual("Rado Rado", myConcat("Rado", "Rado"));
    test.done();
};
