"use strict";

var filter = function (pred, arr){
  var result = [];
  arr.forEach(function(element){
    if(pred(element)){
    result.push(element);
    }
  });
  return result;
};

var users = [{
    "name" : "Rado",
    "score" : 50
}, {
    "name" : "Ivan",
    "score" : 67
}, {
    "name" : "Vlado",
    "score" : 30
}];

// filter all users with score bigger than 40

var result = filter(function(user) {
    return user.score > 40;
}, users);

console.log(result);
