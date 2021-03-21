const mongoose = require("mongoose");

const GradeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  grade: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Grade", GradeSchema);
