"use strict";

var primeFactorization = function(n){
  var allDivisors = [];
  var divisor=2;
  var numbOfDivisor = 0;
  while(n > 1){

    if(n%divisor === 0 && isPrime(divisor)){
      while(n % divisor === 0) {
        n = Math.floor(n/divisor);
      console.log(n);
      numbOfDivisor++;
      }
      allDivisors.push([divisor,numbOfDivisor]);
    }
    else{
      divisor++;
      numbOfDivisor = 0;
    }
  }
  return allDivisors;
};

var isPrime = function(n){
    var isPr = true;
    var numb = 2;
    while(numb<=Math.sqrt(n)){
      if(n%numb === 0){
        isPr = false;
        return isPrime;
      }
      numb++;
    }
    return isPr;
};

exports.primeFactorization = primeFactorization;
