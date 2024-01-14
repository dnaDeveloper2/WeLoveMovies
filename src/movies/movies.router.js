// movies.router.js
const router = require("express").Router();
const moviesController = require("./movies.controller");


router.route('/movies/:movieId').get(moviesController.getMovieById);
router.route('/movies/showing').get(moviesController.getMoviesShowing);
router.route("/movies").get(moviesController.getAllMovies);
router.route("/").get(moviesController.getAllMovies)



module.exports = router;
