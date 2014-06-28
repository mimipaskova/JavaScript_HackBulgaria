"use strict";

var countSubstrings =require("./countSubstrings").countSubstrings;

exports.testcountSubstrings1 = function(test){
  test.equal(2, countSubstrings("This is a test string", "is"));
    test.done();
};

exports.testcountSubstrings2 = function(test) {
  test.equal(2,countSubstrings("babababa", "baba"));
  test.done();
};

exports.testcountSubstrings3 = function(test) {
  test.equal(3,countSubstrings("JavaScript is an awesome language to program in!", "o"));
  test.done();
};

exports.testcountSubstrings4 = function(test) {
  test.equal(0,countSubstrings("We have nothing in common!", "really?"));
  test.done();
};

exports.testcountSubstrings5 = function(test) {
  test.equal(2,countSubstrings("This is this and that is this", "this"));
  test.done();
};
