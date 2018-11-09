import React, { Component } from "react";

export default class Assignments extends Component {
    render() {
        return (
            <div className="container-fluid sw-bg-white full-screen">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Assignment</th>
                            <th>Due Date</th>
                            <th>
                                <div className="float-right">
                                    <button className="btn btn-outline-primary">
                                        <i className="fas fa-plus fa-lg" />
                                    </button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <a>assignment.name</a>
                            </td>
                            <td>assignment.due</td>
                            <td>
                                <div className="float-right">
                                    <button
                                        className="btn btn-outline-warning sw-margin-left"
                                        data-toggle="modal"
                                        data-target="#editModal"
                                    >
                                        <i className="fas fa-edit fa-lg" />
                                    </button>
                                    <button
                                        className="btn btn-outline-danger sw-margin-left"
                                        data-toggle="modal"
                                        data-target="#removeModal"
                                    >
                                        <i className="far fa-trash-alt fa-lg" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
