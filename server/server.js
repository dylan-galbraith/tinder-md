const express = require('express');
const cors = require('cors');
const doctorRoutes = require('./routes/doctors');
const userRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/doctors', doctorRoutes);
app.use('/users', userRoutes);


app.listen(8060, ()=>{
  console.log("Server is listening on port 8060");
});