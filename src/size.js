var sizeof = require('object-sizeof');  // npm install object-sizeof

function size(myFilePass){
  //console.log("This file has " + sizeof(myFile) + " bytes.");
  return "This file has " + sizeof(myFilePass) + " bytes.";
}

module.exports = size;
