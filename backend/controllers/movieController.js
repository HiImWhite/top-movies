const MovieModel = require('../models/movieModel');

const start = (req, res, next) => {
  try {
    return res.status(200).json('Hello there');
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await MovieModel.find({});
    console.log(movies);
    res.status(200).send(movies);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  start,
  getAllMovies,
};
