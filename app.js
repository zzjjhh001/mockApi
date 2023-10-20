const express = require('express');
const router = require('./router/index');
const defaultHandle = require('./default');
const app = express();
app.listen(3004, () => {
  console.log('start serve');
});
// app.use(express.json());
app.use('/', router);
app.use('/', defaultHandle);