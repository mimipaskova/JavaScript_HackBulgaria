"use strict";

var isPrime = function(n){
    var isPr = true;
    var numb = 2;
    while(numb<=Math.sqrt(n)){
      if(n%numb === 0){
        isPr = false;
        return false;
      }
      numb++;
    }
    return isPr;

};

exports.isPrime = isPrime;
