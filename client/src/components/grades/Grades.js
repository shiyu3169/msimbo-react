import React, { Component } from "react";
import { connect } from "react-redux";
import { getGradesByUser } from "../../actions/gradeActions";
import Grade from "./Grade";
class Grades extends Component {
    componentDidMount() {
        const { getGradesByUser } = this.props;
        const { _id } = this.props.profile;
        getGradesByUser(_id);
    }

    render() {
        const { grades } = this.props;
        return (
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>
                            <h4>Grade</h4>
                        </th>
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
