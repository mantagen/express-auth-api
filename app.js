const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const PORT = 1338;

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`We're up and listening on port ${PORT}`);
})
