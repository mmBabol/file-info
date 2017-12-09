var sha1 = require('js-sha1');  // npm install js-sha1

console.log(mySha1('sample/sample.txt'));

// Pass file name into function, return Sha1 digest
function mySha1(myFilePass){
  // Read the file and print its contents.
  var fs = require('fs'), filename = myFilePass;

  var result = fs.readFileSync(filename, 'utf8');
  //76edadc8178cdf0289c0c05a2d7f9a68184e9f29
  return sha1(result);
}

module.exports = mySha1;
