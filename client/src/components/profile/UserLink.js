import React, { Component } from "react";
import { connect } from "react-redux";

class UserLink extends Component {
    render() {
        const { user } = this.props;
        return (
            <React.Fragment>
                <h6>
                    <i className="fas fa-project-diagram" /> Project:{" "}
                    <a
                        className="sw-profile"
                        href={user.project}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {user.project}
                    </a>
                </h6>
                <h6>
                    <i className="fab fa-linkedin fa-lg" /> LinkedIn:{" "}
                    <a
                        className="sw-profile"
                        href={user.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {user.linkedin}
                    </a>
                </h6>
                <h6>
                    <i className="fab fa-github fa-lg" /> GitHub:{" "}
                    <a
                        className="sw-profile"
                        href={user.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
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
