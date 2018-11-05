import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Login from "../auth/Login";
import Register from "../auth/Register";
import { connect } from "react-redux";

class Navbar extends Component {
    collapse = () => {
        $(".collapse").collapse("hide");
    };

    render() {
        const { user } = this.props;
        return (
            <div className="front">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <button
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo02"
                        onClick={this.collapse}
                    >
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/students">
                                    Students
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/curriculum">
                                    Curriculum
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/assignment">
                                    Assignments
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/resources">
                                    Resources
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://www.youtube.com/channel/UC9NVYFh1gs3AShriwWX7NNQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Videos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://msimbo.slack.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Slack
                                </a>
                            </li>
                        </ul>
                        <div>
                            <button
                                className="btn menu-button"
                                data-toggle="modal"
                                data-target="#loginModal"
                            >
                                Login
                            </button>
                            <button
                                className="btn menu-button"
                                data-toggle="modal"
                                data-target="#RegisterModal"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </nav>
                <Login />
                <Register />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(
    mapStateToProps,
    {}
)(Navbar);
