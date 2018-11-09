import React, { Component } from "react";

export default class Assignment extends Component {
    render() {
        const { assignment } = this.props;
        return (
            <tr>
                <td>
                    <a>{assignment.name}</a>
                </td>
                <td>{assignment.due}</td>
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
        );
    }
}
