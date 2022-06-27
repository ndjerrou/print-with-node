// use: node printFile.js [filePath printerName]
const printer = require('@thiagoelg/node-printer');
const fs = require('fs');

const filename = __dirname + '/cv.pdf';

console.log('platform:', process.platform);

if (process.platform != 'win32') {
  printer.printFile({
    filename: filename,
    printer: process.env[3], // printer name, if missing then will print to default printer
    success: function (jobID) {
      console.log('sent to printer with ID: ' + jobID);
    },
    error: function (err) {
      console.log(err);
    },
  });
} else {
  // not yet implemented, use printDirect and text
  printer.printDirect({
    data: fs.readFileSync(filename),
    printer: undefined, // printer name, if missing then will print to default printer
    success: function (jobID) {
      console.log('sent to printer with ID: ' + jobID);
    },
    error: function (err) {
      console.log(err);
    },
  });
}
