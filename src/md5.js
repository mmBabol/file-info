var md5 = require('js-md5');  // npm install js-md5

console.log(myMd5('sample/sample.txt'));

function myMd5(myFilePass){
  // Read the file and print its contents.
  var fs = require('fs'), filename = myFilePass;

  var result = fs.readFileSync(filename, 'utf8');
  return md5(result);
}

module.exports = myMd5;
