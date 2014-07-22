/* globals $ */

$(document).ready(function() {
  "use strict";
  var c = document.getElementById("hackCanvas");
  var ctx = c.getContext("2d");
  var color = "red";
  var array = [];
  var tileSize = 4;
  var canvasWidth = c.width;
  var canvasHeight = c.height;

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

  $("#clearCanvasButton").click(function(e) {
    // Store the current transformation matrix
    ctx.save();

    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);

    // Restore the transform
    ctx.restore();
  });


var createPoint = function(x,y){
  var point = new Pixel(x-tileSize/2 ,y-tileSize/2,ctx,tileSize,color);
  return point;

};

var drawPoint = function(point){
  point.draw();
};

var arrOfPoints = function(point){
  console.log(array);
  array.push(point);
  if(array.length % 3 ===0){
    console.log(array);

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
    array = [];
  }
};

var drawLine = function (firstX,firstY, secondX, secondY){
  ctx.beginPath();
  ctx.moveTo(firstX+tileSize/2,firstY+tileSize/2);
  ctx.lineTo(secondX+tileSize/2,secondY+tileSize/2);
  ctx.stroke();
  ctx.closePath();

  //canvas.width = canvas.width;
  };
});
