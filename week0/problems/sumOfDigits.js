"use strict";

var sumOfDigits= function(number){
  var sum = 0;
  var digit = 0;

  while(number>0){
    digit = number%10;
    number = Math.floor(number/10);
    sum+=digit;
  }
  return sum;
};

exports.sumOfDigits = sumOfDigits;
