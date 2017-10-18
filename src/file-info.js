function getFileName() {
	
}

function getFileSize(){
    
    //Get the file by ID from the HTML file
    var myFile = document.getElementById('FileSize');
    
    myFile.addEventListener('change', function() {
   
        alert("This file has " + this.files[0].size + " bytes.");

    }
  );
}

function getSha1Digest(){
	
}

function getMD5Digest() {
	
}