const MovieModel = require("../models/movieModel");
const { findRank, sortRank } = require("../utilis/helperFunctions");

const start = (req, res, next) => {
  try {
    return res.status(200).json("Hello there");
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const getAllMovies = async (req, res) => {
  try {
    const params = req.query;
    console.log(params);

    sortRank();

    if (!Object.keys(params).length) {
      const movies = await MovieModel.find({})
        .sort({ rank: 1 })
        .collation({ locale: "en_US", numericOrdering: true });
      res.status(200).send(movies);
    } else {
      const key = Object.keys(params);
      const value = Object.values(params).pop();
      const filters = { [key]: { $regex: value, $options: "i" } };

      console.log(filters);

      const movies = await MovieModel.find(filters)
        .sort({ rank: 1 })
        .collation({ locale: "en_US", numericOrdering: true });
      res.status(200).send(movies);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

const postMovie = async (req, res) => {
  try {
    const params = req.body;
    console.log(params);
    const allMovies = await MovieModel.find({})
      .sort({ rank: 1 })
      .collation({ locale: "en_US", numericOrdering: true });
    const rank = findRank(allMovies, params);
    console.log(rank);

    // await MovieModel.findOneAndDelete({ name: 'Test 3' });

    const movies = await MovieModel.create({
      rank: rank,
      name: params.name,
      year: params.year,
      rating: params.rating,
      genre: params.genre,
      certificate: params.certificate,
      run_time: params.run_time,
      tagline: params.tagline,
      budget: params.budget,
      box_office: params.box_office,
      casts: params.casts,
      directors: params.directors,
      writers: params.writers,
    });

    console.log("git");

    sortRank();
    res.status(200).send(movies);
  } catch (err) {
    res.status(400).send(err);
  }
};

const editMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const updatedMovie = req.body;
    const oldMovie = await MovieModel.findById(movieId);

    Object.keys(updatedMovie).map((key, value) => {
      if (updatedMovie[key] == "") {
        updatedMovie[key] = oldMovie[key];
      }
    });
    console.log(movieId, updatedMovie);

    const movie = await MovieModel.findByIdAndUpdate(movieId, updatedMovie, {
      new: true,
    });

    res.status(200).send(movie);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  start,
  getAllMovies,
  postMovie,
  editMovie,
};
