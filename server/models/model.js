const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tech: {
    type: String,
    required: true
  },
  sub: {
    type: Boolean,
    required: true
  },
  rollno: {
    type: Number,  // For integer values
    required: true
  },
  college: {
    type: String,  // For string values
    required: true
  }
});

module.exports = mongoose.model('cbitit3', alienSchema);
