module.exports = function(app) {
  const youtubeModel = require('../models/youtube/youtube.model.server');

  app.get('/api/youtube', findYoutubes);
  app.post('/api/youtube', createYoutube);
  app.put('/api/youtube/:yid', updateYoutube);
  app.delete('/api/youtube/:yid', deleteYoutube);

  async function createYoutube(req, res) {
    const youtube = req.body;
    const data = await youtubeModel.createYoutube(youtube);
    res.json(data);
  }

  async function findYoutubes(req, res) {
    const data = await youtubeModel.findYoutubes();
    res.json(data);
  }

  async function updateYoutube(req, res) {
    const yid = req.params['yid'];
    const youtube = req.body;
    const data = await youtubeModel.updateYoutube(yid, youtube);
    res.json(data);
  }

  async function deleteYoutube(req, res) {
    const yid = req.params['yid'];
    const data = await youtubeModel.deleteYoutube(yid);
    res.json(data);
  }
};
