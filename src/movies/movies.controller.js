// movies.controller.js
const moviesService = require("./movies.service");

async function getAllMovies(req, res, next) {
  try {
    const movies = await moviesService.getAllMovies();
    res.json({ data: movies });
  } catch (error) {
    next(error);
  }
}

async function getMoviesShowing(req, res, next) {
  try {
    const movies = await moviesService.getMoviesShowing();
    res.json({ data: movies });
  } catch (error) {
    next(error);
  }
}

async function getMovieById(req, res, next) {
  const { movieId } = req.params;
  
  try {
    const movie = await moviesService.getMovieById(movieId);
    if (movie) {
      res.json({ data: movie });
    } else {
      res.status(404).json({ error: 'Movie cannot be found.' });
    }
  } catch (error) {
    next(error);
  }
}



module.exports = {
  getAllMovies,
  getMoviesShowing,
  getMovieById,
  
};
