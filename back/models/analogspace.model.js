const mongoose = require("mongoose");

const analogspaceSchema = new mongoose.Schema({
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
});

const AnalogspaceSchema = mongoose.model(
  "analogspaceSchema",
  analogspaceSchema
);
module.exports = AnalogspaceSchema;
