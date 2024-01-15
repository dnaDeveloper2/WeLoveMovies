const moviesService = require('./movies.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function list(req, res, next) {
  try {
    const isShowing = req.query.is_showing === 'true';
    const movies = await moviesService.list(isShowing);
    res.json({ data: movies });
  } catch (error) {
    next(error);
  }
}

async function read(req, res, next) {
  const { movieId } = req.params;

  try {
    const movie = await moviesService.read(movieId);
    if (movie) {
      res.json({ data: movie });
    } else {
      res.status(404).json({ error: 'Movie cannot be found.' });
    }
  } catch (error) {
    next(error);
  }
}


async function listTheaters(req, res, next) {
  const { movieId } = req.params;
  try {
    const theaters = await moviesService.listTheaters(movieId);
    res.json({ data: theaters });
  } catch (error) {
    next(error);
  }
}

async function listReviews(req, res, next) {
  const { movieId } = req.params;

  try {
    const reviews = await moviesService.listReviews(movieId);
    res.json({ data: reviews });
  } catch (error) {
    next(error);
  }
}



async function listCritics(req, res, next) {
  const { movieId } = req.params;
  try {
    const critics = await moviesService.listCritics(movieId);
    res.json({ data: critics });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: asyncErrorBoundary(read),
  listTheaters: asyncErrorBoundary(listTheaters),
  listReviews: asyncErrorBoundary(listReviews),
  listCritics: asyncErrorBoundary(listCritics),
};
