const MovieModel = require("../models/movieModel");

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

    if (!Object.keys(params).length) {
      const movies = await MovieModel.find({}).sort({ rank: 1 });
      res.status(200).send(movies);
    } else {
      const key = Object.keys(params);
      const value = Object.values(params).pop();
      const filters = { [key]: { $regex: value, $options: "i" } };

      console.log(filters);

      const movies = await MovieModel.find(filters).sort({ rank: 1 });
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
    const movies = await MovieModel.create({
      rank: params.rank,
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
    res.status(200).send(movies);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  start,
  getAllMovies,
  postMovie,
};
