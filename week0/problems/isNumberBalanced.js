"use strict";

var isNumberBalanced = function(n){
  var numberString = n.toString();
  if(numberString.length%2 === 0){
    var firstNumb = numberString.substring(0, numberString.length/2);
    var secondNumb = numberString.substring(numberString.length/2,numberString.length);
    var firstNumbStr = parseInt(firstNumb);
    var secondNumbStr = parseInt(secondNumb);
    var sumOfDigitsFirst =sumOfDigits(firstNumbStr);
    var sumOfDigitsSecond =sumOfDigits(secondNumbStr);
    if(sumOfDigitsFirst === sumOfDigitsSecond)
      return true;
    else return false;
  }
  else
  {
    var firstNumbOdd = numberString.substring(0, numberString.length/2);
    var secondNumbOdd = numberString.substring(numberString.length/2+1,numberString.length);
    var firstNumbStrOdd = parseInt(firstNumbOdd);
    var secondNumbStrOdd = parseInt(secondNumbOdd);
    var sumOfDigitsFirstOdd =sumOfDigits(firstNumbStrOdd);
    var sumOfDigitsSecondOdd =sumOfDigits(secondNumbStrOdd);
    if(sumOfDigitsFirstOdd === sumOfDigitsSecondOdd)
      return true;
    else return false;
  }
};

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

exports.isNumberBalanced = isNumberBalanced;
