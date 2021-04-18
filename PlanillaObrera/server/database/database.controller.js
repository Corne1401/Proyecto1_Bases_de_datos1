const express = require('express');
const router = express.Router();
const dbService = require('./database.service');

//routes
router.post('/selectEmployees', selectEmployees);
router.get('/getAllEmployees', getAllEmployees);

module.exports = router;

//Employees---------------------------------------------------
function selectEmployees(req, res, next){
    console.log(req.body.search);
    dbService.selectEmployees(req.body.search)
    .then(employees => employees ? res.json(employees) : res.status(401).json({message: "content not found"}))
    .catch(err => next(err))
}
function getAllEmployees(req, res, next){
    dbService.getAllEmployees()
    .then(employees => employees ? res.json(employees) : res.status(404).json({message: "content not found"}))
}


//Jobs-------------------------------------------------------