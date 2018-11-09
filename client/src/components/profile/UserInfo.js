import React, { Component } from "react";
import { connect } from "react-redux";

class UserInfo extends Component {
    render() {
        const { currentUser } = this.props;
        return (
            <React.Fragment>
                <div className="row" id="info">
                    <div className="col-sm-5">
                        <div className="text-center">
                            <img
                                className="userImage"
                                src="../logo.png"
                                alt="user"
                            />
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <br />
                        <div>
                            <p className="sw-profile">
                                <b>Name: </b>
                                {currentUser.firstName} {currentUser.lastName}
                            </p>
                            <p className="sw-profile">
                                <b>Email: </b>
                                {currentUser.email}
                            </p>
                            <p>
                                <b>Register Time: </b>
                                {new Date(
                                    currentUser.dateCreated
                                ).getMonth()} /{" "}
                                {new Date(
                                    currentUser.dateCreated
                                ).getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row" id="bio">
                    <div className="col-sm-5 center">
                        <h3 className="inline">Biography</h3>
                    </div>
                    <div className="col-sm-7">
                        <p>{currentUser.bio}</p>
                    </div>
                </div>
                <br />
                <br />
                <div id="links">
                    <h6>
                        <i className="fas fa-project-diagram" /> Project:{" "}
                        <a
                            className="sw-profile"
                            href={currentUser.project}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {currentUser.project}
                        </a>
                    </h6>
                    <h6>
                        <i className="fab fa-linkedin fa-lg" /> LinkedIn:{" "}
                        <a
                            className="sw-profile"
                            href={currentUser.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {currentUser.linkedin}
                        </a>
                    </h6>
                    <h6>
                        <i className="fab fa-github fa-lg" /> GitHub:{" "}
                        <a
                            className="sw-profile"
                            href={currentUser.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {currentUser.github}
                        </a>
                    </h6>
                    <br />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(
    mapStateToProps,
    {}
)(UserInfo);
