//var sha1 = require('sha1');

function getFileName() {
	let myName = document.getElementById('FileName');

	myName.addEventListener('change', function(){
		//alert("The name of the file is" + this.files[0].name);
		return "The name of the file is" + this.files[0].name;
	});
}

function getFileSize(){
	//Get the file by ID from the HTML file
  var myFile = document.getElementById('FileSize');

  myFile.addEventListener('change', function() {
      //alert("This file has " + this.files[0].size + " bytes.");
			return "This file has " + this.files[0].size + " bytes.";
  });
}

function getSha1Digest(){

	let mySha = document.getElementById('Sha1Digest');

	mySha.addEventListener('change', function(){
		//alert(sha1(this.files[0].name));
		return sha1(this.files[0].name);
	});


}
