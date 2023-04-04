const http = require('http');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const csv = require('fast-csv');
const app = express();
const MovieModel = require('./models/movieModel');
const PORT = 8000;

const routes = require('./routes/movieRoute');
const path = require('path');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.set('port', process.env.PORT || PORT);
app.use(routes);

// const URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@topmovies.kmfxfku.mongodb.net/topmovies?retryWrites=true&w=majority`;

const URI = 'mongodb://mongodb:27017/db';

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('CONNECTED TO DATABASE');
  })
  .then(async () => {
    const allRecords = [];

    const data = await MovieModel.find({});

    console.log(`Number of documents in DataBase: ${data.length}`);
    if (data.length === 0)
      fs.createReadStream(path.join(__dirname, './', 'movies.csv')).pipe(
        csv
          .parse({ headers: true })
          .on('error', (err) => console.log(err))
          .on('data', (row) => allRecords.push(row))
          .on('end', async (rowCount) => {
            console.log(`${rowCount} rows has parsed`),
              await MovieModel.insertMany(allRecords);
          }),
      );
  })
  .catch((e) => console.error(e));

const server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log(
    'Express server listening on: http://localhost:' + app.get('port'),
  );
});
