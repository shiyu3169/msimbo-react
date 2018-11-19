import React, { Component } from "react";

export default class Season extends Component {
    render() {
        return (
            <li className="list-inline-item">
                <button
                    className="btn btn-outline-secondary"
                    onClick={this.props.active}
                >
                    {this.props.season}
                </button>
            </li>
        );
    }
}
