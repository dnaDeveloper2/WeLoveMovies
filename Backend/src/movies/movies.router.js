const router = require('express').Router();
const moviesController = require('./movies.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

router.route('/').get(moviesController.list);

router.route('/:movieId').get(moviesController.read);

router.route('/:movieId/theaters').get(moviesController.listTheaters);

router.route('/:movieId/reviews').get(moviesController.listReviews);

router.route('/:movieId/critics').get(moviesController.listCritics);

router.all(methodNotAllowed);

module.exports = router;
