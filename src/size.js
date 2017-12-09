var sizeof = require('object-sizeof');  // npm install object-sizeof

console.log(size('sample/sample.txt'));

// Pass file name into function, return fize of file in bytes
function size(myFilePass){
  return "This file has " + sizeof(myFilePass) + " bytes.";
}

module.exports = size;
