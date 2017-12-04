function name(myFilePass){
  //console.log("The name of this file is " + myFile.substr(myFile.indexOf("/") + 1));
  //TODO: change to lastIndexOf + 1 instead of manual count
  return "The name of this file is " + myFilePass.substr(myFilePass.indexOf("/") + 8);
}

module.exports = name;
