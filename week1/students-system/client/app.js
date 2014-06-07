"use strict";

$(document).ready(function() {
  //alert("Hooray, everything runs ok. You can remove this annoying alert from the code.");

var allStudents=[];
var courses={};

var groupBy = function(gf, arr){
  var result = [];// promeneno ot {}
  arr.forEach(function(item){
    var key = gf(item);
    if(!result[key]){
      result[key]=[];
    }
    result[key].push(item);
  });
  return result;
};

var generateTable=function(items){

  var data=[];

  items.forEach(function(item){
    data.push(["<tr>",
          "<td>",item.id, "</td>",
          "<td>",item.name, "</td>",
          "<td>",item.course, "</td>",
          "</tr>"].join(""));

  });

  var table = ["<div class='row'>","<div class='col-xs-12'>","<table class='table'>",
              "<thead>",
              "<tr>",
                "<th>","Id","</th>",
                "<th>","Name","</th>",
                "<th>","Course","</th>",
                "</tr>",
                "</thead>",
                "<tbody>",
                data.join(""),
                "</tbody>",
                "</table>",
                "</div></div>"];

    return table.join("");

};


  $.getJSON("http://localhost:3000/students", function(students, textStatus) {
      console.log(textStatus);
      allStudents=students;

      $("#tables-container").append(generateTable(students));

  });

  $("#group-btn").on("click", function() {

    console.log(courses);
    var byCource = groupBy(function(student){
      return student.course;
    }, allStudents);


    //tuk trqbva da se doopravi
    //$("#tables-container").empty();
    //$("#tables-container").append(generateTable(allStudents));

    //var keys = Object.keys(byCource);
    //kesy.forEach (function)

    $("#tables-container").append(generateTable(allStudents));
    console.log(byCource);
  });

  $("#search-btn").on("click", function() {
    var searched = $("#search-box").val();
    alert("You searched for " + searched);
  });

});
