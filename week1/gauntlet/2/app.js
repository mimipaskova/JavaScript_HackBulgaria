"use strict";

$(document).ready(function() {
  var queue = [".first",".second", ".third"];

  $("#toggle-button").on("click",function(){
    $("p").removeClass("highlight");

    var toHiglight = queue.shift();

    $(toHiglight).addClass("highlight");
    queue.push(toHiglight);

  });
});
