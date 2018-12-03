var mongoose = require("mongoose");

var YoutubeSchema = mongoose.Schema(
    {
        name: String,
        src: String,
        dateCreated: { type: Date, default: Date.now }
    },
    { collection: "youtube" }
);

module.exports = YoutubeSchema;
