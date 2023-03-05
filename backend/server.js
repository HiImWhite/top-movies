const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(cors());

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@topmovies.kmfxfku.mongodb.net/topmovies?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}

connect();

const movieSchema = new mongoose.Schema({
  rank: Number,
  name: String,
  year: Number,
  rating: String,
  genre: String,
  certificate: String,
  run_time: String,
  tagline: String,
  budget: String,
  box_office: String,
  casts: String,
  directors: String,
  writers: String,
});

const Movie = mongoose.model('Movie', movieSchema);

app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find({});
    console.log(movies);
    res.status(200).send(movies);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
