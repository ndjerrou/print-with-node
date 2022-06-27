//////////////////////////////////////////////////////////////////////
const filename = process.argv[2]
  ? `${__dirname}/tickets/${process.argv[2]}`
  : `${__dirname}/data/example.pdf`;

// require('./utilities/createPDF');
require('./utilities/printFile')(filename);

// console.log('platform:', process.platform);

// console.log(printer.getPrinters());

//
const express = require('express');
const app = express();

app.get('*', (req, res) => {});

// app.listen(9000, () => console.log('Server on 9000'));
