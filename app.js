//////////////////////////////////////////////////////////////////////
const filename = process.argv[2]
  ? `${__dirname}/tickets/${process.argv[2]}`
  : `${__dirname}/data/example.pdf`;

// require('./utilities/createPDF');
// require('./utilities/printFile')(filename);

const express = require('express');
const app = express();
const cors = require('cors');
const print = require('./utilities/printFile');

app.use(cors());
app.use(express.json());

app.post('*', (req, res) => {
  const { amount: total, detail } = req.body.order;
  const details = JSON.parse(detail);
  console.log(details);
  let str = null;
  details.forEach((order) => {
    str += `CHEZ SWEETY
        ${order.name} x ${order.quantity}-------------- ${order.price}

    `;
  });

  str += `
    total: -------------------------------------------------${total}
  `;
  console.log(str);

  print(str);
  res.send('ok');
});

app.listen(2000, () => console.log('Server on 2000'));
