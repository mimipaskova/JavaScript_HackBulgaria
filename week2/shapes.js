"use strict";


function Shape(type) {
  this.getType = function() {
    return type;
  };
}

Shape.prototype.area = function() {
  throw new Error("Cannot call area of Shape. Use subclasses!");
};


function Rectangle( a, b){
  Shape.call(this, "rectangle");
  this.a = a;
  this.b = b;
}


Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function (){
  var S = this.a*this.b;
  return S;
};


function Triangle(a, h){
  Shape.call(this,"triangle");
  this.a = a;
  this.h = h;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.area = function(){
  var S = this.a*this.h/2;
  return S;
};

function Circle(r){
  Shape.call(this, "circle");
  this.r = r;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


