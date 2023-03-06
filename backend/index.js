const http = require('http');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 8000;

const routes = require('./routes/movieRoute');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.set('port', process.env.PORT || PORT);
app.use(routes);

const URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@topmovies.kmfxfku.mongodb.net/topmovies?retryWrites=true&w=majority`;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('CONNECTED TO DATABASE');
  })
  .catch((e) => console.error(e));

const server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log(
    'Express server listening on: http://localhost:' + app.get('port'),
  );
});
