// const pdf = require('pdf-creator-node');
// const fs = require('fs');
// // Read HTML Template
// const html = fs.readFileSync('data/template.html', 'utf8');

// var options = {
//   format: 'letter',
//   orientation: 'portrait',
//   header: {
//     height: '45mm',
//     contents: '<div style="text-align: center;font-size: 20px">Sweety</div>',
//   },
//   footer: {
//     height: '28mm',
//     contents: {
//       first: 'Cover page',
//       2: 'Second page', // Any page number is working. 1-based index
//       default:
//         '<span style="color: #444;">Nous sommes ouverts tous les jours de 9h à 20h{{page}}</span>/<span>{{pages}}</span>', // fallback value
//       last: 'Last Page',
//     },
//   },
// };

// const users = [
//   {
//     name: 'Shyam',
//     age: '26',
//   },
//   {
//     name: 'Navjot',
//     age: '26',
//   },
//   {
//     name: 'Vitthal',
//     age: '26',
//   },
// ];
// const document = {
//   html: html,
//   data: {
//     users,
//   },
//   path: './tickets/output.pdf',
//   type: '',
// };

// pdf
//   .create(document, options)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const fs = require('fs');
const PDFDocument = require('pdfkit');
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream(`./data/example.pdf`));
doc.fontSize(10).text('Chez Sweety', 100, 100);
// doc
//   .addPage()
//   .fontSize(15)
//   .text('Generating PDF with the help of pdfkit', 100, 100);
doc.end();
