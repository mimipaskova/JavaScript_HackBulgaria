"use strict";

var numberToList = function(number){
  var arr = [];
  var digit = 0;
  while (number>0){
    digit = number%10;
    number = Math.floor(number/10);
    arr.push(digit);
  }
  arr = arr.reverse();
  return arr;
};

exports.numberToList = numberToList;
