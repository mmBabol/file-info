let myFile;

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  myFile = process.argv[2];
}

// If no arguments are entered, use file front sample directory
if (process.argv.length = 2) {
	myFile = "sample/sample.txt";
}

console.log("The name of this file is " + myFile.substr(myFile.indexOf("/") + 1));
