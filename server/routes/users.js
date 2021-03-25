const { Router } = require("express");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const {v4:uuidv4} = require('uuid');

const userData = './data/users.json'

function readData(data) {
  const readData = fs.readFileSync(data);
  const parsedData = JSON.parse(readData)
  return parsedData
}

router.get('/', (req, res) => {
  res.send(readData(userData))
})

router.post('/', (req, res) => {
  const newUser = {
    id: uuidv4(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    preferredLanguage: req.body.preferredLanguage,
    english: req.body.english,
    image: req.body.image,
    symptoms: req.body.symptoms,
    location: req.body.location,
    specialRequirements: req.body.specialRequirements,
    sex: req.body.sex,
    hasInsurance: req.body.hasInsurance,
    allergies: req.body.allergies
  }

  let uData = readData(userData);

  uData = [newUser, ...uData]
  
  const newData = JSON.stringify(uData, null, 2)
  fs.writeFileSync(userData, newData)

  res.send(newData);
})

module.exports = router;