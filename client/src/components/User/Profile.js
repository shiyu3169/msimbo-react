import React, { Component } from "react";

export default class Profile extends Component {
    render() {
        return (
            <div className="sw-bg-white">
                <br />
                <div className="row container-fluid">
                    <div className="col-sm-3">
                        <div className="container-fluid">
                            <div className="text-center">
                                <img
                                    width="100%"
                                    src="../logo.png"
                                    alt="user"
                                />
                                <br />
                                <br />
                                <button className="btn btn-block btn-outline-info">
                                    Update Image
                                </button>
                            </div>
                        </div>
                        <br />
                        <div className="text-center">
                            <p>
                                <b>Name: </b>
                                firstName lastName
                            </p>
                            <p className="sw-profile">
                                <b>Email: </b>
                                email@gmail.com
                            </p>
                            <p>
                                <b>Register Time: </b>
                                month/year
                            </p>
                        </div>
                        <button className="btn btn-outline-info btn-block">
                            Edit Profile
                        </button>
                    </div>
                    <div className="col-sm-9">
                        <div className="container-fluid">
                            <h5>Biography</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ab ducimus ipsam tempore
                                quisquam quos dignissimos, aliquam itaque
                                molestias quaerat quod deleniti possimus at
                                blanditiis distinctio quibusdam, deserunt
                                pariatur, quidem porro!
                            </p>
                            <button className="btn btn-outline-info">
                                Edit Biography
                            </button>
                            <br />
                            <br />
                            <h6>
                                <i className="fas fa-project-diagram" />{" "}
                                Project:{" "}
                                <a
                                    className="sw-profile"
                                    href="#"
                                    target="_blank"
                                >
                                    project
                                </a>
                            </h6>
                            <h6>
                                <i className="fab fa-linkedin fa-lg" />{" "}
                                LinkedIn:{" "}
                                <a
                                    className="sw-profile"
                                    href="#"
                                    target="_blank"
                                >
                                    linkedin
                                </a>
                            </h6>
                            <h6>
                                <i className="fab fa-github fa-lg" /> GitHub:{" "}
                                <a
                                    className="sw-profile"
                                    href="github"
                                    target="_blank"
                                >
                                    github
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
                        </div>
                        <br />
                        <div className="container-fluid">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>
                                            <h4>Grade</h4>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>name</td>
                                        <td>score</td>
                                        <td>
                                            <button className="btn btn-outline-info">
                                                Show Comment
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
