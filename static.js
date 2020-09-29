const express = require('./node_modules/express');
const app = express();

app.use(express.static('static'));

app.listen(9000, () => console.warn('Static files served on port 9000'));
