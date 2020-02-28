const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const cors = require('cors');

const app = express();
dotenv.config();

const DB = process.env.MONGO_DB_CLUSTER;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('connected to mongo Database'));

app.use(bodyParser({ extended: true }));
app.use(cors());
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
