# File-info
[![BuildStatus](https://travis-ci.org/mmBabol/file-info.svg?branch=master)](https://travis-ci.org/mmBabol/file-info)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mmbabol/file-info/blob/master/LICENSE)

This is an Node.js package designed for obtaining file info. It is a lab for
the DPS909 - Open Source class at Seneca College, and it is meant for practising creating
projects on GitHub, using and contributing to GitHub, as well as documenting.

* Print the name of a given filename without the absolute path
* Print the size of a given filename in MB
* Create a hash key from Sha1 digest
* Create a hash key from MD5 digest

## Installation

* Clone repo using Terminal with `git clone https://github.com/mmBabol/file-info.git`
* Navigate into the directory with `cd file-info`
* Install node modules with  `npm install`


## Usage

Once installed and ready to use, simply call the desired function and filename as argument. From the file-info directory, run `npm start` to run all of the functions one after the other. This will display the results and how the programs run. To test a function alone, enter `node src/size.js [txt file name & location]`.
![alt text](https://s20.postimg.org/548hc95u5/terminal.png)


## Test

To run all tests:
* Navigate to the test directory from root with `cd test`
* Run the tests with `npm test`

This will perform the tests on all the functions (Name, Size, Md5, and Sha1)


## Navigation

| Contents     | Location      |
| ------------ | ------------- |
| Source files | [src](https://github.com/mmBabol/file-info/tree/master/src) |
| Test Unit    | [test](https://github.com/mmBabol/file-info/tree/master/test) |
| Issues       | [issues](https://github.com/mmBabol/file-info/issues) |


## Contributors

[Securter](https://github.com/Securter)


## LICENSE

[MIT](https://github.com/mmBabol/file-info/blob/master/LICENSE)
