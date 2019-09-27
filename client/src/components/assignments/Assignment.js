import React, { Component } from "react";
import { connect } from "react-redux";
import AssignmentInfo from "./AssignmentInfo";
import AssignmentEdit from "./AssignmentEdit";

class Assignment extends Component {
    render() {
        const { assignment, editing } = this.props;
        if (editing === assignment._id) {
            return <AssignmentEdit assignment={assignment} />;
        } else {
            return <AssignmentInfo assignment={assignment} />;
        }
    }
}

const mapStateToProps = state => ({
    editing: state.assignment.editing
});

export default connect(
    mapStateToProps,
    {}
)(Assignment);
