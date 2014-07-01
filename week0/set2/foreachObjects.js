"use strict";

var forEachObject = function(f, arr) {
  var
    i = 0,
    n = arr.length;
    if(Array.isArray(arr)){

      for(i; i < n; i++) {
      f(arr[i], i, arr);
      }
    }
    else{
      Object.keys(arr).map(function(value, index) {
      f(value,arr[value],arr);
      });
    }

};
