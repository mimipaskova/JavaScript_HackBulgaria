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
      var dec_min=minutes/10;
      var edin_min=minutes%10;
      var dec_secundes=secundes/10;
      var edin_secundes=secundes%10;
      $("minute-first-digit").html(dec_min);
      $("minute-second-digit").html(edin_min);
      $("second-first-digit").htm(dec_secundes);
      $("second-second-digit").html(edin_secundes);




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
