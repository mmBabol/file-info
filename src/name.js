console.log(name('sample/sample.txt'));

// Pass file into function, return the name of file only
function name(myFilePass){
  //TODO: change to lastIndexOf + 1 instead of manual count
  return "The name of this file is " + myFilePass.substr(myFilePass.indexOf("/") + 8);
}

module.exports = name;
