"use strict";

var contains = function(element, arr){
  return arr.some(function(elementArr){
      return (elementArr === element);
  });
};
