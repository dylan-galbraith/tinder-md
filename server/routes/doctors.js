const { Router } = require("express");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const doctorData = './data/doctors.json'
const {v4:uuidv4} = require('uuid');

function readData(data) {
  const readData = fs.readFileSync(data);
  const parsedData = JSON.parse(readData)
  return parsedData
}

router.get('/', (req, res) => {
  res.send(readData(doctorData))
})

router.post('/', (req, res) => {
  const newDoctor = {
    id: uuidv4(),
    name: req.body.name,
    specialties: req.body.specialties,
    location: req.body.location,
    languages: req.body.languages,
    specialCares: req.body.specialCares,
    years: req.body.years,
    testimonials: req.body.testimonials,
    image: req.body.image
  }

  let dData = readData(doctorData);

  dData = [newDoctor, ...dData]
  
  const newData = JSON.stringify(dData, null, 2)
  fs.writeFileSync(doctorData, newData)

  res.send(newData);
})

module.exports = router;