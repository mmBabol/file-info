let myFile;
let myFunction;
let myResult;

if(process.argv[3] == null){
  myFunction = 1;
}
else {
  myFunction = process.argv[3];
  if(myFunction != '1' && myFunction != '2' && myFunction != '3' && myFunction != '4'){
    myFunction = 1;
  }
}

// Make sure we got a filename on the command line.
if (process.argv.length > 2) {
  myFile = process.argv[2];
}
else {
  myFile = "sample/sample.txt";
}

switch ((myFunction)) {
  case '4':
    myResult = md5(myFile);
    break;
  case '3':
    myResult = sha1(myFile);
    break;
  case '2':
    myResult = size(myFile);
    break;
  default:
    myResult = name(myFile);
}

console.log(myResult);
