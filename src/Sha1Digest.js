var sha1 = require('js-sha1');  // npm install js-sha1
var myFile;

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  myFile = process.argv[2];
}

// If no arguments are entered, use file front sample directory
if (process.argv.length = 2) {
	myFile = "sample/sample.txt";
}

// Read the file and print its contents.
var fs = require('fs'), filename = myFile;
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  // Print SHA1 hash to of text file to screen
  //console.log(sha1(data))
  return sha1(data);
});
