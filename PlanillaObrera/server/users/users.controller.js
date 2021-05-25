const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/authenticateAdmin', authenticateAdmin);
router.post('/authenticateEmployee', authenticateEmployee)
router.get('/', getAll);

module.exports = router;

function authenticateAdmin(req, res, next) {
    userService.authenticateAdmin(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function authenticateEmployee(req, res, next) {
    userService.authenticateEmployee(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}