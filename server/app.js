const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Updated MongoDB connection URL for replica set
const url = 'mongodb://localhost:27020,localhost:27021,localhost:27022/cbititl?replicaSet=m101';

const app = express();

// Connect to MongoDB with the replica set configuration
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const con = mongoose.connection;
con.on('open', () => {
    console.log('Connected to MongoDB...');
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const alienRouter = require('./routes/route');
app.use('/cbitit3', alienRouter);

app.listen(9000, () => {
    console.log('Server started on port 9000');
});
