const knex = require('../db/connection');

function listTheaters() {
  return knex('theaters')
    .select('*')
    .then(async (theaters) => {
      const theatersWithMovies = await Promise.all(
        theaters.map(async (theater) => {
          const movies = await knex('movies_theaters')
            .join('movies', 'movies_theaters.movie_id', '=', 'movies.movie_id')
            .select('movies.*')
            .where({ 'movies_theaters.theater_id': theater.theater_id });

          return { ...theater, movies };
        })
      );
      return theatersWithMovies;
    });
}

module.exports = {
  listTheaters,
};
