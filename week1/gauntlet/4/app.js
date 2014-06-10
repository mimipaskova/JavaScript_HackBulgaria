"use strict";

$(document).ready(function() {
  //alert("Hooray, everything runs ok. You can remove this annoying alert from the code.");

  var generateTable=function(items){

  var data=[];

  items.forEach(function(item){
    data.push(["<option>",item.val(), "</option>",
          "<option>",item.val(),"</option>",
          "<option>",item.val(),
          "</option>"].join(""));

  });

    return data.join("");

};



  $.getJSON("http://localhost:3000/students", function(students, textStatus) {
      console.log(textStatus);
      console.log(students);

      $("#tables-container").append(generateTable(students));


  });
});
