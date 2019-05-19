const express = require('express');
const app = express();
const marcoRoutes = require('./routes/marco')
const invoiceRoutes = require('./routes/invoice')


app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/marco', marcoRoutes.getSequence);
app.get('/invoice', invoiceRoutes.getNumberSequence);


app.listen(3000, function() {
  console.log('Listening on port 3000');
});
