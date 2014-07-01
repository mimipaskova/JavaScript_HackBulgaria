"use strict";

var testData = [{
    type: "beer",
    score: 1000
  }, {
    type: "beer",
    score: 1010
  }, {
    type: "beer",
    score: 1020
  }, {
    type: "beer",
    score: 1030
  }, {
    type: "beer",
    score: 1040
  }, {
    type: "fries",
    score: 834
  }, {
    type: "fries",
    score: 500
  }, {
    type: "fries",
    score: -1
  }, {
    type: "fries",
    score: 0
  }, {
    type: "fries",
    score: 60
  }];

function test(){
  var beerArr = [],
    friesArr = [];

  beerArr = testData.filter(function(element){
    if(element.type === "beer")
      return element;
  });

  testData.sort(function(a,b){
    if(a.type != "fries")
      return;

    return a.score - b.score;
  });
  console.log(testData);
}

test();


function beerAndFries(items){


}
