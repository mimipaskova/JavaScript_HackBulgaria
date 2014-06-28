"use strict";

var countVowels =require("./countVowels").countVowels;

exports.testSumOfMinAndMax4 = function (test) {
    test.equal(3, countVowels("JavaScript"));
    test.done();
};

exports.testSumOfMinAndMax10 = function(test) {
  test.equal(8,countVowels("Theistareykjarbunga"));
  test.done();
};


exports.testSumOfMinAndMax2 = function (test) {
    test.equal(0, countVowels("grrrrgh!"));
    test.done();
};

exports.testSumOfMinAndMax3 = function (test) {
    test.equal(22, countVowels("Github is the second best thing that happend to programmers, after the keyboard!"));
    test.done();
};

exports.testSumOfMinAndMax4 = function (test) {
    test.equal(8, countVowels("A nice day to code!"));
    test.done();
};
