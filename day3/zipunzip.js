var zlib = require('zlib');
var fs = require('fs');

//to zip the file
var gzip = zlib.createGzip();
var readable = fs.createReadStream('./sampleBigFile.txt');
var writable = fs.createWriteStream('./sampleBigFile.txt.gz');
readable.pipe(gzip).pipe(writable);

//to unzip the file

const fileContents = fs.createReadStream('./sampleBigFile.txt.gz');
const writeStream = fs.createWriteStream('./sampleBigFile.txt');
const unzip = zlib.createGunzip();

fileContents.pipe(unzip).pipe(writeStream);