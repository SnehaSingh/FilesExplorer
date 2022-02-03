const express = require('express')
const app = express();
const port = 3000;

const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/files', (req, res) => {
    const data = require('./data/data.json');
    res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
