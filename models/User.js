var mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
  {
    password: { type: String, required: true },
    firstName: { type: String, default: "" },
    middleName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    image: { type: String, default: "/logo.png" },
    icon: { type: String, default: "/logo.png" },
    admin: { type: Boolean, default: false },
    bio: { type: String, default: "MSIMBO Student" },
    github: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    project: { type: String, default: "" },
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "user" }
);

module.exports = mongoose.model("user", UserSchema);
