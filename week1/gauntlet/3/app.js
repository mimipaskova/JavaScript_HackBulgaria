"use strict";

$(document).ready(function() {
  $("#search-button").on("click", function(){

    var url = $("#search-input").val();

    var $image = $("<img>").attr("src", url);
    $image
      .load(function(){
        $("#images").append($image);
       })
      .error(function(){
        alert("The url is invalid");
      });
    $image.on("click",function(){
      $image.remove();
    });

  });

});


$("#search-input").on("keyup",function(event){
  console.log(event);
  if(event.keyCode === 13) {
    $("#search-button").trigger("click");
  }
});
