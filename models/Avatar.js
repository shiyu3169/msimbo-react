var mongoose = require("mongoose");

var AvatarSchema = mongoose.Schema(
  {
    name: String,
    data: Buffer,
    mimetype: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "picture" }
);

module.exports = mongoose.model("avatar", AvatarSchema);
