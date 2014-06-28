"use strict";

var countSubstrings = function(haystack, needle){

/*jshint multistr:true */
  var hits = 0;
  var needleLength = needle.length;
  var ourNeedle;

  for(var i=0; i < haystack.length; i++){
    ourNeedle = 0;
      if(haystack[i] === needle[0]){
          for(var j=i; j<(needle.length+i); j++){
            if(haystack[j] === needle[j-i])
            ourNeedle ++;
          }
          if(ourNeedle === needleLength){
            hits++;
            i+=ourNeedle-1;
          }
      }
  }
  return hits;
};

exports.countSubstrings = countSubstrings;
