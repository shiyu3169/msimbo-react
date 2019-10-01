var mongoose = require("mongoose");

var AssignmentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    due: String,
    src: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "assignment" }
);

module.exports = mongoose.model("assignment", AssignmentSchema);
