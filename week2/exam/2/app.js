"use strict";

$(document).ready(function(){
  var clock;
  //alert("start");
  $("#up").on("click",function(){
    var minutes = 0;
    var seconds = 0;
    var max_minutes = $("#minutes").val();
    var max_seconds = $("#seconds").val();
    clock = window.setInterval(function(){
      seconds++;
      if(seconds > 59){
        minutes++;
        seconds=0;
      }
      if(minutes >= max_minutes && seconds >= max_seconds){
        window.clearInterval(clock);
      }
      var dec_min=Math.floor(minutes/10);
      var edin_min=minutes%10;
      var dec_seconds=Math.floor(seconds/10);
      var edin_seconds=seconds%10;
      $("#minute-first-digit").html(dec_min);
      $("#minute-second-digit").html(edin_min);
      $("#second-first-digit").html(dec_seconds);
      $("#second-second-digit").html(edin_seconds);




    }, 10);
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
    $("#minute-first-digit").html(0);
    $("#minute-second-digit").html(0);
    $("#second-first-digit").html(0);
    $("#second-second-digit").html(0);
    window.clearInterval(clock);
  });

});
