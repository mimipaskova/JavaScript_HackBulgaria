"use strict";

var format = function(str, dict){

  // str = str.split("{");
  // str = str.join("");
  // str = str.split("}");
  // str = str.join("");
  Object.keys(dict).forEach(function(key){
    str = str.split("{" +key + "}").join(dict[key]);
  });
  //str.split(Object.keys(str).)
  return str;
};

var formatted = format("{lang} is a very weird {thing}!", {
  "lang" : "JavaScript",
  "thing" : "language"
});

console.log(formatted);
