"use strict";

var isIntPalindrom = function(number){
  var n = number.toString();
  var arr = n.split("");
  arr = arr.reverse();
  arr = arr.join();
  var nSplit = n.split("");
  var blqq = nSplit.join();


  if(arr === blqq){
    return true;
  }
  return false;

};


exports.isIntPalindrom = isIntPalindrom;
