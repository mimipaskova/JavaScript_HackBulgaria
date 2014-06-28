"use strict";

var isNumberBalanced = require("./isNumberBalanced").isNumberBalanced;

exports.testisNumberBalanced9 = function(test){
  test.equal(true, isNumberBalanced(9));
    test.done();
};

exports.testisNumberBalanced11 = function(test) {
  test.equal(true,isNumberBalanced(11));
  test.done();
};

exports.testisNumberBalanced13 = function(test) {
  test.equal(false,isNumberBalanced(13));
  test.done();
};

exports.testisNumberBalanced121 = function(test) {
  test.equal(true,isNumberBalanced(121));
  test.done();
};

exports.testisNumberBalanced4518 = function(test) {
  test.equal(true,isNumberBalanced(4518));
  test.done();
};
exports.testisNumberBalanced28471 = function(test) {
  test.equal(false,isNumberBalanced(28471));
  test.done();
};
exports.testisNumberBalanced1238033 = function(test) {
  test.equal(true,isNumberBalanced(1238033));
  test.done();
};
