"use strict";


String.prototype.capitalize = function() {
  return this.toUpperCase();
};

String.prototype.dasherize = function(){
  var new_string =this.replace(/_/g, "-");
  return new_string;
};

Array.prototype.range = function(from, to){
  var result = [];

  while(from <= to){
    result.push(from);
    from+=1;
  }
  return result;
};


String.prototype.times = function(n){
  var that =this;
  return [].range(1,n).map(function(){
    return that;
  }).join(" ");
};

String.prototype.blank = function(){
  if (!this.trim()){
    return true;
  }
  return false;
};

Array.prototype.first = function(){
  return this[0];
};

Array.prototype.sum = function(){
  var total = this.reduce(function(a, b) {
  return a + b;
  });
return total;
};


Array.prototype.average = function(){
  var total = this.reduce(function(a, b) {
  return a + b;
  });
return total/this.length;
};

