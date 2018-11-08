import React, { Component } from "react";
import { connect } from "react-redux";

class UserInfo extends Component {
    render() {
        const { user } = this.props;
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
                                {user.firstName} {user.lastName}
                            </p>
                            <p className="sw-profile">
                                <b>Email: </b>
                                {user.email}
                            </p>
                            <p>
                                <b>Register Time: </b>
                                {new Date(user.dateCreated).getMonth()} /{" "}
                                {new Date(user.dateCreated).getFullYear()}
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
                        <p>{user.bio}</p>
                    </div>
                </div>
                <br />
                <br />
                <div id="links">
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
                </div>
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
)(UserInfo);
