const knex = require('../db/connection');
const mapProperties = require("../utils/map-properties")

const addCritic = mapProperties({
  c_critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
  c_created_at: "critic.created_at",
  c_updated_at: "critic.updated_at",
});

function list(isShowing) {
  if (isShowing) {
    return knex('movies')
      .join('movies_theaters', 'movies.movie_id', '=', 'movies_theaters.movie_id')
      .select('movies.*')
      .where({ 'movies_theaters.is_showing': true })
      .distinct();
  }
  return knex('movies').select('*');
}

function read(movieId) {
  return knex('movies').select('*').where({ movie_id: movieId }).first();
}

function listTheaters(movieId) {
  return knex('theaters')
    .join('movies_theaters', 'theaters.theater_id', '=', 'movies_theaters.theater_id')
    .select('theaters.*')
    .where({ 'movies_theaters.movie_id': movieId });
}

function listReviews(movieId) {
  return knex('reviews')
    .join('critics', 'reviews.critic_id', '=', 'critics.critic_id')
    .select('reviews.*', 'critics.preferred_name', 'critics.surname', 'critics.organization_name')
    .where({ 'reviews.movie_id': movieId })
  .then(reviews => reviews.map(review => addCritic(review)))
}

function listCritics(movieId) {
  return Promise.reject({ status: 404, message: 'Not found.' });

}

module.exports = {
  list,
  read,
  listTheaters,
  listReviews,
  listCritics,
};
