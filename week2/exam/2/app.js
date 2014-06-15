"use strict";

$(document).ready(function(){
  var clock;
  //alert("start");
  $("#up").on("click",function(){
    var minutes = $("#minutes").val();
    var secundes = $("#secundes").val();
    clock = window.setInterval(function(){
      secundes++;
      if(secundes > 59){
        minutes++;
        secundes=0;
      }



    }, 1000);
    //setInterval(function(){
      //alert("Hello")
    //}, 3000);
  });

  $("#down").on("click",function(){
    //var intervalID = window.setInterval(function(){


    //}, 500);
    //setInterval(function(){
      //alert("Hello")
    //}, 3000);
  });

  $(".btn-danger").on("click",function(){
    alert("stop");
  });

});
