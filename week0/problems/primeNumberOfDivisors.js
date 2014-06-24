"use strict" ;

var primeNumberOfDivisors = function(n){
  if(n === 1){
    return true;
  }
  var sum = 0;
  var divisor = 1;
  while(divisor<=n){
    if(n%divisor ===0){
      sum++;
    }
    divisor++;
  }
  return isPrime(sum);

};


var isPrime = function(n){
    var isPr = true;
    var numb = 2;
    while(numb<=Math.sqrt(n)){
      if(n%numb === 0){
        console.log(numb);
        isPr = false;
        return false;
      }
      numb++;
    }
    return isPr;
};

exports.primeNumberOfDivisors = primeNumberOfDivisors;
