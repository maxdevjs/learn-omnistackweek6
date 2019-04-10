const express = require('express');
const port = 3333;
const app = express();

app.get('/test', (req, res) => {
  res.send("value");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
