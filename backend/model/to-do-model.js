const mongoose = require("mongoose");

const todoscheama = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("todo", todoscheama);
