const mongoose = require('mongoose');
require('dotenv').config();
let dbURI= 'mongodb+srv://lavusahith:au0913567@cluster0.6hf4qzh.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
