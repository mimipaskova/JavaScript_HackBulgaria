"use strict";

var sumOfMinAndMax = function(arr){

  var min = Math.max.apply(Math, arr);
  var max = Math.min.apply(Math, arr);
  return min+max;
};

exports.sumOfMinAndMax = sumOfMinAndMax;
