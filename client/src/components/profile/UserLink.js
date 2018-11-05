import React, { Component } from "react";
import { connect } from "react-redux";

class UserLink extends Component {
    render() {
        const { user } = this.props;
        return (
            <React.Fragment>
                <h6>
                    <i className="fas fa-project-diagram" /> Project:{" "}
                    <a className="sw-profile" href="#" target="_blank">
                        {user.project}
                    </a>
                </h6>
                <h6>
                    <i className="fab fa-linkedin fa-lg" /> LinkedIn:{" "}
                    <a className="sw-profile" href="#" target="_blank">
                        {user.linkedin}
                    </a>
                </h6>
                <h6>
                    <i className="fab fa-github fa-lg" /> GitHub:{" "}
                    <a className="sw-profile" href="github" target="_blank">
                        {user.github}
                    </a>
                </h6>
                <br />
                <button
                    className="btn btn-outline-info"
                    data-toggle="modal"
                    data-target="#linkModal"
                >
                    Edit Links
                </button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(
    mapStateToProps,
    {}
)(UserLink);
