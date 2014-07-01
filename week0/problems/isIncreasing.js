"use strict";

var isIncreasing = function(seq){
  var key = 0;
  var flag = 0;
  while(key < seq.length-1){
    if(seq[key]<seq[key+1])
    {
      flag = flag;
    }
    else {
      flag ++;
    }
    key ++;
  }

  if(flag === 0)
    return true;
  return false;
};

exports.isIncreasing = isIncreasing;
