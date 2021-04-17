const express = require('express');
const router = express.Router();
const dbService = require('./database.service');

//routes
router.get('/selectEmployees', selectEmployees);

module.exports = router;

function selectEmployees(req, res, next){
    dbService.selectEmployees(req.body)
    .then(employees => employees ? res.json(employees) : res.status(404).json({message: "content not found"}))
    .catch(err => next(err))
}