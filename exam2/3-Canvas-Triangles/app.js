/* globals $ */

$(document).ready(function() {
  "use strict";
  var c = document.getElementById("hackCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "green";
  ctx.fillRect(10,10,10,10);
  var color = "red";
  var array = [];

  function Pixel(x,y, ctx, size, color) {
      this.x = x;
      this.y = y;
      this.ctx = ctx;
      this.size = size;
      this.color = color;

      this.draw = function(){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x , this.y, this.size, this.size, this.color);

      };
  }

  $("#hackCanvas").click(function(e) {
    var offset = $(this).offset();
    var x = e.clientX - offset.left;
    var y = e.clientY - offset.top;
    drawPoint(createPoint(x,y));
    arrOfPoints(createPoint(x,y));
  });


var createPoint = function(x,y){
  var point = new Pixel(x-5,y-5,ctx,10,color);
  return point;

};

var drawPoint = function(point){
  point.draw();
};

var arrOfPoints = function(point){
  array.push(point);
  if(array.length % 3 ===0){

    //drawLine();
    var x = array[array.length-1].x;
    var y = array[array.length-1].y;
    var xx = array[array.length-2].x;
    var yy = array[array.length-2].y;
    var xxx = array[array.length-3].x;
    var yyy = array[array.length-3].y;
    drawLine(x,y,xx,yy);
    drawLine(x,y,xxx,yyy);
    drawLine(xx,yy,xxx,yyy);

  }
};

var drawLine = function (firstX,firstY, secondX, secondY){
  var c = document.getElementById("hackCanvas");
  var ctx = c.getContext("2d");
  ctx.moveTo(firstX+5,firstY+5);
  ctx.lineTo(secondX+5,secondY+5);
  ctx.stroke();
};

  var pix = new Pixel(2,3,ctx,10,"red");
  pix.draw();



});
