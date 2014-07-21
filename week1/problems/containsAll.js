"use strict";

var containsAll = function(elements, arr){
  elements.forEach(function(element){
    console.log(arr);
    arr = arr.contains(element);
  });
  console.log(arr);
};
