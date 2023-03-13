const MovieModel = require("../models/movieModel");

const getAverageBoxOfficePerDirector = async (req, res) => {
  try {
    const movies = await MovieModel.find({});

    const avgBoxPerDirector = {};

    Object.keys(movies).map((key) => {
      if (movies[key].box_office != "Not Available") {
        try {
          avgBoxPerDirector[movies[key].directors] = {
            director: movies[key].directors,
            avgBox: Math.round(
              (avgBoxPerDirector[movies[key].directors].avgBox *
                avgBoxPerDirector[movies[key].directors].movies +
                parseInt(movies[key].box_office)) /
                (avgBoxPerDirector[movies[key].directors].movies + 1)
            ),
            movies: avgBoxPerDirector[movies[key].directors].movies + 1,
          };
        } catch (err) {
          avgBoxPerDirector[movies[key].directors] = {
            director: movies[key].directors,
            avgBox: parseInt(movies[key].box_office),
            movies: 1,
          };
        }
      }
    });

    res.status(200).send(avgBoxPerDirector);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  getAverageBoxOfficePerDirector,
};
