const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
app.use(cors()) // after you initialize your express app instance
const indexController = require('./controller/index.controller');

// a server endpoint 
app.get('/', indexController);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

