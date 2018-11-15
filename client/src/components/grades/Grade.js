import React, { Component } from "react";
import Comment from "./Comment";
export default class Grade extends Component {
    render() {
        const { name, score } = this.props.grade;
        return (
            <tr>
                <td>{name}</td>
                <td>{score}</td>
                <td>
                    <button
                        className="btn btn-outline-info"
                        data-toggle="modal"
                        data-target={`#c${this.props.grade._id}`}
                    >
                        Show Comment
                    </button>
                    <button className="btn btn-outline-danger float-right">
                        <i className="far fa-trash-alt" />
                    </button>
                    <Comment grade={this.props.grade} />
                </td>
            </tr>
        );
    }
}
