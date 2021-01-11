const AppRouter = require('./routes/AppRouter');
const express = require('express');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
///mongo heroku deployment
const path = require('path');
//
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const connection = require('./db/connection');

const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config();

// initailize  app
const PORT = process.env.PORT || 8000;
const app = express();

// middleware setup
app.use(logger('dev'));
app.use(helmet({ contentSecurityPolicy: false })); // updated for mongo deployment
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
///mongo heroku deployment
app.use(express.static(path.join(__dirname, 'client', 'build')));
//

app.disable('X-Powered-By');
app.get('/', (req, res) => res.send('Server is running'));
app.use('/api', AppRouter);
///mongo heroku deployment

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
);
//
// custom error message handler
app.use(notFound);
app.use(errorHandler);

// async port connection
app.listen(PORT, async () => {
  try {
    await connection;
    console.log('Database Connected');
    console.log(
      `Sever listening in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
  } catch (error) {
    throw new Error('Error with Connection').red.underline.bold;
  }
});
