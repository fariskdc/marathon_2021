const mongoose = require("mongoose");

const SubjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  professor: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Subject", SubjectSchema);
