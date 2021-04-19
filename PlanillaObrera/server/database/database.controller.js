const express = require('express');
const router = express.Router();
const dbService = require('./database.service');

//--------routes---------
//gets
router.get('/getAllEmployees', getAllEmployees);
router.get('/getAllJobs', getAllJobs);
//Post
router.post('/selectEmployees', selectEmployees);


module.exports = router;

//Employees---------------------------------------------------
function selectEmployees(req, res, next){
    console.log(req.body.search);
    dbService.selectEmployees(req.body.search)
    .then(employees => employees ? res.json(employees) : res.status(404).json({message: "content not found"}))
    .catch(err => next(err))
}
function getAllEmployees(req, res, next){
    dbService.getAllEmployees()
    .then(employees => employees ? res.json(employees) : res.status(404).json({message: "content not found"}))
}


//Jobs-------------------------------------------------------
function getAllJobs(req, res, next){
    dbService.getAllJobs()
    .then(Jobs => Jobs ? res.json(Jobs) : res.status(404).json({message: "content not found"}))
}