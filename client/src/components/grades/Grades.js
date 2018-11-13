import React, { Component } from "react";
import { connect } from "react-redux";
import { getGradesByUser } from "../../actions/gradeActions";
import Grade from "./Grade";
class Grades extends Component {
    componentDidMount() {
        const { getGradesByUser } = this.props;
        const { _id } = this.props.profile;
        console.log(_id);
        getGradesByUser(_id);
    }
    componentWillReceiveProps(nextProps) {
        const { getGradesByUser } = this.props;
        if (nextProps.profile._id !== this.props.profile._id) {
            const uid = nextProps.profile._id;
            getGradesByUser(uid);
        }
    }

    render() {
        const { grades } = this.props;
        return (
            <table className="table table-striped table-hover" id="grade">
                <thead>
                    <tr>
                        <th>
                            <h4>Grade</h4>
                        </th>
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
        );
    }
}

const mapStateToProps = state => ({
    grades: state.grade.grades,
    profile: state.user.profile
});

export default connect(
    mapStateToProps,
    { getGradesByUser }
)(Grades);
