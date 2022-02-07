const express = require('express')
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Working');
});

app.get('/files', (req, res) => {
  const lister = require('./lib/lister');
  const data = lister.createJsonTree();
  const formattedJson = lister.formatJson(data);
  res.json(formattedJson);
});

app.listen(port, () => {
  console.log(`FilesExport app is listening on port ${port}`)
});
