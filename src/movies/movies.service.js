// movies.service.js
const knex = require("../db/connection");

function getAllMovies() {
  return knex('movies');
}

function getMoviesShowing() {
  return knex('movies')
    .join('movies_theaters', 'movies.movie_id', '=', 'movies_theaters.movie_id')
    .distinct('movies.movie_id', 'title', 'runtime_in_minutes', 'rating', 'description', 'image_url')
    .where({ 'movies_theaters.is_showing': true });
}

function getMovieById(movieId) {
  return knex('movies').where({ 'movie_id': movieId }).first();
}



module.exports = {
  getAllMovies,
  getMoviesShowing,
  getMovieById,
 
};
