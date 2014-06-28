"use strict";

var countConsonants = function(str){
  str = str.toLowerCase();
  var vowels = "qwrtpsdfghjklzxcvbnm".split("");
  var count = 0;

  vowels.forEach(function(vowel) {
    count +=str.split(vowel).length-1;
  });
  return count;
};

exports.countConsonants = countConsonants;
