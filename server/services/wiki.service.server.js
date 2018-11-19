module.exports = function(app) {
    const wikiModel = require("../models/wiki/wiki.model.server");

    app.get("/api/resource", findWikis);
    app.get("/api/resource/:wid", findWikiById);
    app.put("/api/resource/:wid", updateWiki);
    app.delete("/api/resource/:wid", deleteWiki);
    app.post("/api/resource", createWiki);

    function createWiki(req, res) {
        const wiki = req.body;
        wikiModel.createWiki(wiki).then(wiki => {
            res.json(wiki);
        });
    }

    function findWikis(req, res) {
        wikiModel.findWikis().then(wikis => {
            res.json(wikis);
        });
    }

    function findWikiById(req, res) {
        const wid = req.params["wid"];
        wikiModel.findWikiById(wid).then(wiki => {
            res.json(wiki);
        });
    }

    function updateWiki(req, res) {
        const wid = req.params["wid"];
        const wiki = req.body;
        wikiModel.updateWiki(wid, wiki).then(data => {
            res.send(data);
        });
    }

    function deleteWiki(req, res) {
        const wid = req.params["wid"];
        wikiModel.deleteWiki(wid).then(data => {
            res.send(data);
        });
    }
};
