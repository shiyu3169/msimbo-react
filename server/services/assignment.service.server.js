module.exports = function(app) {
  const assignmentModel = require("../models/assignment/assignment.model.server");

  app.post("/api/assignment", createAssignment);
  app.put("/api/assignment/:aid", updateAssignment);
  app.delete("/api/assignment/:aid", deleteAssignment);

  function createAssignment(req, res) {
    const ass = req.body;
    assignmentModel.createAssignment(ass).then(data => {
      res.json(data);
    });
  }

  function updateAssignment(req, res) {
    const aid = req.params["aid"];
    const ass = req.body;
    assignmentModel.updateAssignment(aid, ass).then(data => {
      res.send(data);
    });
  }

  function deleteAssignment(req, res) {
    const aid = req.params["aid"];
    assignmentModel.deleteAssignment(aid).then(data => {
      res.send(data);
    });
  }
};
