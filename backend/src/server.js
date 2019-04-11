const express = require('express');
const mongoose = require('mongoose');

const port = 3333;
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-jxhrd.mongodb.net/omistack?retryWrites=true', {
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
