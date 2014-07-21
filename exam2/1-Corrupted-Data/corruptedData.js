"use strict";


var data = require("./data");
var index = 0,
    dublicate = 0;
while(index < data.length){
  dublicate = index+1;
  while(dublicate < data.length){

    if(data[index].fields.mac === data[dublicate].fields.mac
      && data[index].fields.date === data[dublicate].fields.date){
      console.log(data[dublicate]);
    };
    dublicate++;
    //console.log(dublicate);
  };
  index++;
}
