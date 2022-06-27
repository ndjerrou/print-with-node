// use: node printFile.js [filePath printerName]
const printer = require('@thiagoelg/node-printer');
const fs = require('fs');

function print(filename = `./data/example.pdf`) {
  console.log('filename received = ', filename);
  if (process.platform != 'win32') {
    printer.printFile({
      filename,
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
      data: 'kikoo',
      printer: undefined, // printer name, if missing then will print to default printer
      success: function (jobID) {
        console.log('sent to printer with ID: ' + jobID);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
}

print();

module.exports = print;
