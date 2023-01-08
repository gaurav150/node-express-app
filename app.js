const express = require('express');
const path = require('path');

const app = express();

const port = 8080;

// eslint-disable-next-line import/extensions
const index = require('./index.js');

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
// use path module to send request as static file on website
  res.sendFile(path.join(__dirname, './public/index.html'));

  /* just send simple request */
  //  res.send('You just called get method')
});

app.post('/views', (req, res) => {
  res.send('You just called post method');
});

app.use('/index', index);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on  ${port}`);
});
