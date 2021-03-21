const mongoose = require("mongoose");

const IndexSchema = mongoose.Schema({
  number: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Index", IndexSchema);
