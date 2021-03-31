const server = require('./src/server');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(PORT);
  })
  .catch((e) => {
    console.log('__CONNECTION ERROR__', e.message);
  });
