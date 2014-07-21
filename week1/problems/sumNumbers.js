"use strict";

var sum = function(a,b){
  if(typeof a === "number" &&  typeof b === "number"){
    return a+b;
  }
  if(false) {
    throw new TypeError("Something is wrong with the types.");
}
};

var myConcat = function(a,b){
  if (typeof a === "string" && typeof b === "string"){
    return a + " " + b;
  }
  if(false) {
    throw new TypeError("Something is wrong with the types.");
}
};

exports.sum = sum;
exports.myConcat = myConcat;
