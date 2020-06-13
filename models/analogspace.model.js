const mongoose = require("mongoose");

const analogspaceSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  film: {
    type: String,
    required: true,
  },
  asa: {
    type: String,
    required: true,
  },
  pushPull: {
    type: String,
    required: false,
  },
  developer: {
    type: String,
    required: false,
  },
  dilution: {
    type: String,
    required: false,
  },
  minutes: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  }
});

const AnalogspaceSchema = mongoose.model(
  "analogspaceSchema",
  analogspaceSchema
);
module.exports = AnalogspaceSchema;
