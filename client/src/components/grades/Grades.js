import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGradesByUser } from "../../actions/gradeActions";
import Grade from "./Grade";
import NewGrade from "./NewGrade";
import "braft-editor/dist/index.css";

const Grades = ({ grades, user, profile, getGradesByUser }) => {
  useEffect(() => {
    getGradesByUser(profile._id);
  }, [profile._id, getGradesByUser, user]);

  return (
    <>
      <table className="table table-striped table-hover" id="grade">
        <thead>
          <tr>
            <th>
              <h4>Grade</h4>
            </th>
            <th />
            {user.admin && (
              <th>
                <button
                  className="btn btn-outline-info float-right"
                  data-toggle="modal"
                  data-target="#newGrade"
                >
                  <i className="fas fa-plus" />
                </button>
              </th>
            )}
          </tr>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {grades.map(grade => (
            <Grade key={grade._id} grade={grade} />
          ))}
        </tbody>
      </table>
      <NewGrade />
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  grades: state.grade.grades,
  profile: state.user.profile
});

export default connect(mapStateToProps, { getGradesByUser })(Grades);
