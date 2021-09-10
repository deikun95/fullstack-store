require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({ createParentPath: true }));
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on ${PORT} port...`));
  } catch (e) {
    console.log(e);
  }
};

start();
