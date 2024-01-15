exports.up = function (knex) {
    return knex.schema.createTable('movies_theaters', (table) => {
      table.integer('movie_id').unsigned().references('movies.movie_id');
      table.integer('theater_id').unsigned().references('theaters.theater_id');
      table.boolean('is_showing');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('movies_theaters');
  };
  