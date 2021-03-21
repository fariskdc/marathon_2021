const mongoose = require("mongoose");

const ProfessorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  subjects: {
    type: Array,
  },
});

module.exports = mongoose.model("Professor", ProfessorSchema);
