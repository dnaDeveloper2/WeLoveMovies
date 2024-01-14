// // reviews.controller.js
// const reviewsService = require('./reviews.service');

// async function getReviewsByMovieId(req, res, next) {
//   const { movieId } = req.params;

//   try {
//     const reviews = await reviewsService.getReviewsByMovieId(movieId);
//     res.json({ data: reviews });
//   } catch (error) {
//     next(error);
//   }
// }

// async function deleteReview(req, res, next) {
//   const { reviewId } = req.params;

//   try {
//     const deletedReview = await reviewsService.deleteReview(reviewId);
//     if (deletedReview) {
//       res.status(204).end();
//     } else {
//       res.status(404).json({ error: 'Review cannot be found.' });
//     }
//   } catch (error) {
//     next(error);
//   }
// }

// async function updateReview(req, res, next) {
//   const { reviewId } = req.params;
//   const updatedReview = req.body.data;

//   try {
//     const review = await reviewsService.updateReview(reviewId, updatedReview);
//     if (review) {
//       res.json({ data: review[0] });
//     } else {
//       res.status(404).json({ error: 'Review cannot be found.' });
//     }
//   } catch (error) {
//     next(error);
//   }
// }

// // Other reviews controller methods...

// module.exports = {
//   getReviewsByMovieId,
//   deleteReview,
//   updateReview,
//   // Other exported methods...
// };
