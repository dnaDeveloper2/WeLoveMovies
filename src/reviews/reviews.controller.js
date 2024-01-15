const reviewsService = require('./reviews.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function reviewExists(req, res, next) {
  const review = await reviewsService.read(req.params.reviewId);
  if (review) {
    res.locals.review = review;
    return next();
  }
  next({ status: 404, message: `Review cannot be found.` });
}

async function updateReview(req, res, next) {
  const { reviewId } = req.params;
  const updatedReview = req.body.data;

  try {
    const review = await reviewsService.updateReview(reviewId, updatedReview);
    const data = await reviewsService.read(reviewId); 
     res.json({data});
  } catch (error) {
    next(error);
  }
}

async function deleteReview(req, res, next) {
  const { reviewId } = req.params;

  try {
    const deletedReview = await reviewsService.deleteReview(reviewId);
    if (deletedReview) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Review cannot be found.' });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  updateReview: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(updateReview)],
  deleteReview: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(deleteReview)],
};

