import React, { Component } from "react";
import { connect } from "react-redux";
import { getGradesByUser } from "../../actions/gradeActions";
import Grade from "./Grade";
import NewGrade from "./NewGrade";

class Grades extends Component {
    componentDidMount() {
        const { getGradesByUser } = this.props;
        const { _id } = this.props.profile;
        getGradesByUser(_id);
    }
    componentWillReceiveProps(nextProps) {
        const { getGradesByUser } = this.props;
        if (nextProps.profile._id !== this.props.profile._id) {
            const uid = nextProps.profile._id;
            getGradesByUser(uid);
        }
    }

    handleCreate = () => {};

    render() {
        const { grades, currentUser } = this.props;
        return (
            <React.Fragment>
                <table className="table table-striped table-hover" id="grade">
                    <thead>
                        <tr>
                            <th>
                                <h4>Grade</h4>
                            </th>
                            <th />
                            {currentUser.admin && (
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
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    grades: state.grade.grades,
    profile: state.user.profile
});

export default connect(
    mapStateToProps,
    { getGradesByUser }
)(Grades);
