const MovieModel = require('../models/movieModel');

// function findRank(arr, newObject) {
//   const newRatingFloat = parseFloat(newObject.rating);
//   let i = 0;
//   while (i < arr.length && parseFloat(arr[i].rating) >= newRatingFloat) {
//     i++;
//   }

//   return i + 1;
// }

async function sortRank() {
  const movies = await MovieModel.find({});

  let tempArray = [];
  Object.values(movies).map((value, i) => {
    tempArray[i] = [value._id, value.rating, value.name];
  });

  const newMovieArray = tempArray.sort((a, b) => b[1] - a[1]);

  const moviesArray = newMovieArray.map(async ([_id, rating], rank) => {
    await MovieModel.findOneAndUpdate({ _id }, { rank: (rank + 1).toString() });
  });
}

module.exports = {
  // findRank,
  sortRank,
};
