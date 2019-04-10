const express = require('express');
const port = 3333;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
