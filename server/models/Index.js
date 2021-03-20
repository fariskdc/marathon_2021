const mongoose = require("mongoose");

const IndexSchema = mongoose.Schema({
  number: {
    type: String,
    require: true,
  },
  grades: Array,
});

module.exports = mongoose.model("Index", IndexSchema);
