const mongoose = require("mongoose");
const YoutubeSchema = require("./youtube.schema.server");
const YoutubeModel = mongoose.model("YoutubeModel", YoutubeSchema);

YoutubeModel.findYoutubes = findYoutubes;
YoutubeModel.createYoutube = createYoutube;
YoutubeModel.updateYoutube = updateYoutube;
YoutubeModel.deleteYoutube = deleteYoutube;

function findYoutubes() {
    return YoutubeModel.find();
}

function createYoutube(youtube) {
    return YoutubeModel.create(youtube);
}

function updateYoutube(yid, youtube) {
    return YoutubeModel.update({ _id: yid }, youtube);
}

function deleteYoutube(yid) {
    return YoutubeModel.remove({ _id: yid });
}

module.exports = YoutubeModel;