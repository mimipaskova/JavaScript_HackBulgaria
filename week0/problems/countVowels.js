"use strict";

var countVowels = function(str){
  str = str.toLowerCase();
  var vowels = "aeuioy".split("");
  var count = 0;

  vowels.forEach(function(vowel) {
    count +=str.split(vowel).length-1;
  });
  return count;
};

exports.countVowels = countVowels;
