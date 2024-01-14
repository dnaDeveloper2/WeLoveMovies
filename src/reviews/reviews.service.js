// // reviews.service.js
// const knex = require('../db/connection');

// function getReviewsByMovieId(movieId) {
//   return knex('reviews')
//     .select(
//       'reviews.review_id',
//       'content',
//       'score',
//       'created_at',
//       'updated_at',
//       'critic_id',
//       'movies.movie_id',
//       'critics.preferred_name',
//       'critics.surname',
//       'critics.organization_name'
//     )
//     .join('critics', 'reviews.critic_id', '=', 'critics.critic_id')
//     .join('movies', 'reviews.movie_id', '=', 'movies.movie_id')
//     .where({ 'reviews.movie_id': movieId });
// }

// function deleteReview(reviewId) {
//   return knex('reviews').where({ 'review_id': reviewId }).del();
// }

// function updateReview(reviewId, updatedReview) {
//   return knex('reviews').where({ 'review_id': reviewId }).update(updatedReview, ['*']);
// }

// // Other reviews service methods...

// module.exports = {
//   getReviewsByMovieId,
//   deleteReview,
//   updateReview,
//   // Other exported methods...
// };
