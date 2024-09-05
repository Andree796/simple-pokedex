const express = require('express');
const routes = require('./src/routes/routes.js');
const app = express();

app.use(express.json());

app.use(routes)
app.listen(3000, () => console.log(`Server listening on http://localhost:3000`))
