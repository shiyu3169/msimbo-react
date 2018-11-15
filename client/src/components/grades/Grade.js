import React, { Component } from "react";
import Comment from "./Comment";
import DeleteGrade from "./DeleteGrade";
export default class Grade extends Component {
    render() {
        const { name, score, _id } = this.props.grade;
        const { grade } = this.props;
        return (
            <tr>
                <td>{name}</td>
                <td>{score}</td>
                <td>
                    <button
                        className="btn btn-outline-info"
                        data-toggle="modal"
                        data-target={`#c${_id}`}
                    >
                        Show Comment
                    </button>
                    <button
                        className="btn btn-outline-danger float-right"
                        data-toggle="modal"
                        data-target={`#remove${_id}`}
                    >
                        <i className="far fa-trash-alt" />
                    </button>
                    <Comment grade={grade} />
                    <DeleteGrade grade={grade} />
                </td>
            </tr>
        );
    }
}
