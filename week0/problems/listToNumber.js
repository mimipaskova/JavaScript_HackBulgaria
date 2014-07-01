"use strict";

var listToNumber = function(digits){
  var list = digits.join("");
  list = parseInt(list);
  return list;
};

exports.listToNumber = listToNumber;

