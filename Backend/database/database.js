const mongoose = require('mongoose');


const uri = process.env.MONGODB_URI;
const db1URI = uri;
const db2URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sv9mrx3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const db1 = mongoose.createConnection(db1URI, {
});

const db2 = mongoose.createConnection(db2URI, {
});

db1.on('connected', () => {
  console.log('Connected to db1');
});

db2.on('connected', () => {
  console.log('Connected to db2');
});

db1.on('error', (err) => {
  console.error('db1 connection error:', err);
});

db2.on('error', (err) => {
  console.error('db2 connection error:', err);
});

module.exports = { db1, db2 };
