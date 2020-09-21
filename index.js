const express = require('./node_modules/express');

const app = express();

app.use(express.static('public'));

app.listen(8080, () => console.warn('Server is running'));
