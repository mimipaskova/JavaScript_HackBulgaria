"use strict";

var sumOfDivisors = function(n){
  var sum = n;
  var divisor=1;
  while(divisor<n){
    if(n%divisor ===0){
      sum +=divisor;
    }
    divisor++;
  }
  return sum;
};

exports.sumOfDivisors = sumOfDivisors;
