const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello Node!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})