"use strict";

var myMap = function(f, arr){
  var result = [];
  arr.forEach(function(element){
    result.push(f(element));
  });
  return result;
};

var result = myMap(function(x) {
    return x * x;
}, [1,2,3]);

console.log(result);
