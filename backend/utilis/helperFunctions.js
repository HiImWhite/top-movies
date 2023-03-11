function findRank(arr, newObject) {
  const newRatingFloat = parseFloat(newObject.rating);
  let i = 0;
  while (i < arr.length && parseFloat(arr[i].rating) >= newRatingFloat) {
    i++;
  }

  return i + 1;
}

module.exports = {
  findRank,
};
