const express = require('express');
const app = express();
const PORT = 3333;
const routes = require('./routes');

require('./database');

app.use(express.json());
app.use(routes);

app.listen(PORT, _ => {
  console.log(`App is running on http://localhost:${PORT}`)
})

