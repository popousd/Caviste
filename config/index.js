var dotenv = require('dotenv');
var mongoose = require('mongoose');

dotenv.config();

mongoose.connect('mongodb://' + process.env.DB_HOST +
                 ':' + process.env.DB_PORT +
                 '/' + process.env.DB_NAME);

mongoose.connection.on('connected', ()=> {
  console.log("Connected to database " + process.env.DB_NAME);
});

mongoose.connection.on('error', ()=> {
  console.log("Could not connect to database " + process.env.DB_NAME);
});