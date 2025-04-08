const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/CRUD";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('MongoDB connected');
})

db.on('error',()=>{
    console.log('MongoDB connection failed');
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

module.exports = db;