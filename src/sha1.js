var sha1 = require('js-sha1');  // npm install js-sha1

function sha1(myFilePass){
  // Read the file and print its contents.
  var fs = require('fs'), filename = myFilePass;
  var myData;

  //var result = fs.readFileSync(filename, 'utf8');

  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    // Print SHA1 hash to of text file to screen
    //console.log(sha1(data))
    myData = data;
    //return sha1(data);
  });

//76edadc8178cdf0289c0c05a2d7f9a68184e9f29
  return sha1(myData);
}

module.exports = sha1;
