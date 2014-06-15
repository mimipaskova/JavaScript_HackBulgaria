"use strict";

$(document).ready(function(){
  var clock;


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
  });

  $("#down").on("click",function(){
    var max_minutes = $("#minutes").val();
    var max_seconds = $("#seconds").val();
    clock = window.setInterval(function(){
      max_seconds--;
      if(max_seconds < 0){
        max_minutes--;
        max_seconds = 59;
      }

      var dec_min=Math.floor(max_minutes/10);
      var edin_min=max_minutes%10;
      var dec_seconds=Math.floor(max_seconds/10);
      var edin_seconds=max_seconds%10;
      $("#minute-first-digit").html(dec_min);
      $("#minute-second-digit").html(edin_min);
      $("#second-first-digit").html(dec_seconds);
      $("#second-second-digit").html(edin_seconds);
      if(dec_min < 1 && edin_min < 1 && dec_seconds < 1 && edin_seconds < 1){
        window.clearInterval(clock);
        $("#second-second-digit").html(0);
      }

    }, 1000);
  });

  $(".btn-danger").on("click",function(){
    $("#minute-first-digit").html(0);
    $("#minute-second-digit").html(0);
    $("#second-first-digit").html(0);
    $("#second-second-digit").html(0);
    window.clearInterval(clock);
  });

});
