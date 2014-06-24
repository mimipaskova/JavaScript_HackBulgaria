"use strict";

var isIntPalindrom = require("./isIntPalindrom").isIntPalindrom;

exports.testisIntPalindrom8424244555 = function(test){
  test.equal(false, isIntPalindrom(8424244555));
    test.done();
};

exports.testisIntPalindrom9 = function(test) {
  test.equal(false,isIntPalindrom(911111191));
  test.done();
};

exports.testisIntPalindrom7652332567 = function(test) {
  test.equal(true,isIntPalindrom(7652332567));
  test.done();
};

exports.testisIntPalindrom1001 = function(test) {
  test.equal(true,isIntPalindrom(1001));
  test.done();
};

exports.testisIntPalindrom1 = function(test) {
  test.equal(true,isIntPalindrom(1));
  test.done();
};
