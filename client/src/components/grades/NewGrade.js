import React, { Component } from "react";
import { connect } from "react-redux";
import InputGroup from "../layout/InputGroup";
import { addGrade } from "../../actions/gradeActions";
import $ from "jquery";

class NewGrade extends Component {
    state = {
        name: "",
        score: 0,
        comment: ""
    };

    submit = e => {
        e.preventDefault();
        const { name, score, comment } = this.state;
        const grade = {
            name,
            score,
            comment,
            user: this.props.profile._id
        };

        this.props.addGrade(grade).then(() => {
            $("#newGrade").modal("hide");

            this.setState({
                name: "",
                score: 0,
                comment: ""
            });
        });
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div
                className="modal fade"
                id="newGrade"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-lg modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Grade</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.submit}>
                                <div className="row">
                                    <div className="col-6">
                                        <InputGroup
                                            label="Name"
                                            name="name"
                                            placeholder="Grade Name..."
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <InputGroup
                                            label="Score"
                                            name="score"
                                            type="number"
                                            placeholder="Grade Score..."
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                                <InputGroup
                                    label="Comment"
                                    name="comment"
                                    rows="5"
                                    placeholder="Grade Comment..."
                                    onChange={this.onChange}
                                />
                                <button className="btn btn-success btn-block">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.user.profile
});

export default connect(
    mapStateToProps,
    { addGrade }
)(NewGrade);
