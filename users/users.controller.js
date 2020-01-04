const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/', register);
router.get('/', getAll);

module.exports = router;

function register(req, res, next) {
    userService.create(req.body)
        .then((msg) => res.json(msg))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll(req.query.accountId)
        .then(users => res.json(users))
        .catch(err => next(err));
}

