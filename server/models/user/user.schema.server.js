var mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        firstName: { type: String, default: "" },
        lastName: { type: String, default: "" },
        email: String,
        image: { type: String, default: "logo.png" },
        admin: { type: Boolean, default: false },
        bio: String,
        github: String,
        linkedin: String,
        project: String,
        dateCreated: { type: Date, default: Date.now }
    },
    { collection: "user" }
);

module.exports = UserSchema;
