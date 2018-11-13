import React, { Component } from "react";

export default class Grade extends Component {
    render() {
        const { name, score, comment } = this.props.grade;
        return (
            <tr>
                <td>{name}</td>
                <td>{score}</td>
                <td>
                    <button className="btn btn-outline-info">
                        Show Comment
                    </button>
                </td>
            </tr>
        );
    }
}
