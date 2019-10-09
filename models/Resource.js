var mongoose = require("mongoose");

var ResourceSchema = mongoose.Schema(
  {
    name: String,
    src: String,
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "wiki" }
);

module.exports = mongoose.model("wiki", ResourceSchema);
