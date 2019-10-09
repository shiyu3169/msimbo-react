var mongoose = require("mongoose");

var VideoSchema = mongoose.Schema(
  {
    name: String,
    src: String,
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "youtube" }
);

module.exports = mongoose.model("youtube", VideoSchema);
