const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const connection = mongoose.connect(
  process.env.NODE_ENV === 'production'
    ? MONGO_URI
    : 'mongodb://localhost:27017/BookEm',
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

module.exports = connection;
