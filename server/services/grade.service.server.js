module.exports = function(app) {
    const gradeModel = require("../models/grade/grade.model.server");

    app.post("/api/grade", createGrade);
    app.get("/api/grade/:uid", findGradeForUser);
    app.get("/api/grade", findAllGrade);
    app.put("/api/grade/:gid", updateGrade);
    app.delete("/api/grade/:gid", deleteGrade);

    function createGrade(req, res) {
        const grade = req.body;
        gradeModel.createGradeForUser(grade).then(data => {
            res.json(data);
        });
    }

    function findGradeForUser(req, res) {
        const uid = req.params["uid"];
        gradeModel.findGradeForUser(uid).then(data => {
            res.json(data);
        });
    }

    function findAllGrade(req, res) {
        const season = req.query["season"];
        const year = req.query["year"];
        if (season && year) {
            if (season === "Spring") {
                gradeModel
                    .findGradesBySeason(
                        new Date(`${year}-03-01`),
                        new Date(`${year}-08-31`)
                    )
                    .then(data => {
                        res.json(data);
                    });
            } else {
                gradeModel
                    .findGradesBySeason(
                        new Date(`${year}-09-01`),
                        new Date(`${year + 1}-2-20`)
                    )
                    .then(data => {
                        res.json(data);
                    });
            }
        } else {
            gradeModel.findAllGrade().then(data => {
                res.json(data);
            });
        }
    }

    function updateGrade(req, res) {
        const gid = req.params["gid"];
        const grade = req.body;
        gradeModel.updateGrade(gid, grade).then(data => {
            res.json(data);
        });
    }

    function deleteGrade(req, res) {
        const gid = req.params["gid"];
        gradeModel.deleteGrade(gid).then(data => {
            res.json(data);
        });
    }
};
