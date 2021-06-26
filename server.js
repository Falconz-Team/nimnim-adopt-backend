const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
app.use(cors()) // after you initialize your express app instance
app.use(express.json());
// const MONGODB_URL = process.env.MONGODB_URL;
const indexController = require('./controller/index.controller');
const petsDataController = require('./controller/petsData.controller');
const cratePetController = require('./controller/createPet.controller');
const deletePetController = require('./controller/deletePet.controller');
const updatePetController = require('./controller/updatePet.controller');


const mongoose = require('mongoose');
mongoose.connect(process.env.MANGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true });

// a server endpoint 
app.get('/', indexController);

app.get('/pets', petsDataController);
app.post('/pet', cratePetController);
app.delete('/pet/:pet_idx', deletePetController);
app.put('/pet/:pet_idx', updatePetController);



app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

