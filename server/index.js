const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public/')));

const port = process.env.PORT || 8888;

app.listen(port);


app.get('/listing/:productNumber', (req, res) => {
  res.sendFile('index.html', {
    root: `${__dirname}/../public`,
  });
});