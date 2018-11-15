import React, { Component } from "react";
import Comment from "./Comment";
import EditGrade from "./EditGrade";
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
                        className="btn btn-outline-warning float-right"
                        data-toggle="modal"
                        data-target={`#edit${_id}`}
                    >
                        <i className="fas fa-edit" />
                    </button>
                    <Comment grade={grade} />
                    <EditGrade grade={grade} />
                </td>
            </tr>
        );
    }
}
