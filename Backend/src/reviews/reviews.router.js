const router = require('express').Router();
const reviewsController = require('./reviews.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

router.route('/:reviewId').put(reviewsController.updateReview).delete(reviewsController.deleteReview).all(methodNotAllowed);

module.exports = router;
